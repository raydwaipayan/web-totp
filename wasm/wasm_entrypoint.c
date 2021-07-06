#include "emscripten.h"
#include "totp.h"
#include "base32.h"
#include <string.h>
#include <time.h>

#define MAX_KEYSIZE 100

EMSCRIPTEN_KEEPALIVE
char *totp(char *secret, int encoding) {
	char input[MAX_KEYSIZE];
	char output[7];

	switch (encoding) {
	case 32:
		base32_decode(secret, input, sizeof(input));
		break;
	default:
		strcpy(input, secret);
	}

	int len = strlen(input);

	if (!totp_generate(input, len, 0, 30, output)) {
		return output;
	}

	return "\0";
}
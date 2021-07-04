#include "emscripten.h"
#include "totp.h"
#include <string.h>
#include <time.h>

EMSCRIPTEN_KEEPALIVE
char *totp(char *secret) {
	int secret_len = strlen(secret);
	char output[7];

	if (!totp_generate(secret, secret_len, 0, 30, output)) {
		return output;
	}

	return "\0";
}
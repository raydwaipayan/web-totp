#include "totp.h"
#include <stdio.h>
#include <string.h>
#include <time.h>

int main()
{
	char output[7];
	char expected[7] = "654796";
	char *s = "\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b";
	size_t len = 16;

	if (!totp_generate(s, len, time(NULL), 30, output)) {
		if (strcmp(output, expected) == 0) {
			printf("OK\n");
		} else {
			printf("ERROR\n");
		}
	}
	else {
		printf("ERROR\n");
	}

	return 0;
}

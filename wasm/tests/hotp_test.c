#include "hotp.h"
#include <stdio.h>
#include <string.h>

int main()
{
	char output[7];
	char expected[7] = "582227";
	char *s = "\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b\x0b";
	size_t len = 16;

	if (!hotp_generate(s, len, 1, output)) {
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

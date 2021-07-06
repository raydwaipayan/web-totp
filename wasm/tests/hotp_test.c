#include "hotp.h"
#include <stdio.h>
#include <string.h>

int main()
{
	char output[7];
	char expected[7] = "520489";
	char *s = "12345678901234567890";
	size_t len = strlen(s);

	if (!hotp_generate(s, len, 9, output)) {
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

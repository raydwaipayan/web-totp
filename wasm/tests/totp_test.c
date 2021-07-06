#include "totp.h"
#include <stdio.h>
#include <string.h>
#include <time.h>

int main()
{
	char output[7];
	char expected[7] = "287082";
	char *s = "12345678901234567890";
	size_t len = strlen(s);

	if (!totp_generate(s, len, time(NULL) - 40, 30, output)) {
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

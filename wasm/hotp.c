/* hotp.c - HOTP generation library according to rfc4226
   Copyright (c) 2021 Dwaipayan Ray

   This library is free software; you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public
   License as published by the Free Software Foundation; either
   version 2.1 of the License, or (at your option) any later version.

   This library is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public
   License along with this library; if not, write to the Free Software
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
   Inspired by Simon Jefferson */

#include "hotp.h"
#include <stdio.h>

int
hotp_generate(const char *secret,
			  size_t secret_len,
			  uint64_t moving_factor,
			  char *output_otp)
{
	char hmac_result[SHA1_DIGEST_SIZE];
    char counter[sizeof(moving_factor)];
    size_t i;
    int rc;

    for (i = 0; i < sizeof(counter); i++)
      counter[i] = (moving_factor >> ((sizeof(moving_factor) - i - 1) * 8)) & 0xFF;

	rc = hmac_sha1(secret, secret_len, counter, sizeof(moving_factor), hmac_result);

	if (rc)
		return CRYPTO_ERROR;

	int offset   =  hmac_result[19] & 0xf ;
	long bin_code = (hmac_result[offset]  & 0x7f) << 24
		| (hmac_result[offset+1] & 0xff) << 16
		| (hmac_result[offset+2] & 0xff) <<  8
		| (hmac_result[offset+3] & 0xff) ;

	bin_code = bin_code % 1000000;
	sprintf(output_otp, "%06ld", bin_code);
    output_otp[6] = '\0';

	return CRYPTO_SUCCESS;
}
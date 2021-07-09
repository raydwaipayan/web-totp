/* hotp.c - HOTP generation library according to rfc4226
   Copyright (c) 2021 Dwaipayan Ray

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.

   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <https://www.gnu.org/licenses/>. */

#include "totp.h"
#include "time.h"

int
totp_generate(const char *secret,
			  size_t secret_len,
			  uint64_t T0,
			  uint64_t X,
			  char *output_otp)
{
	uint64_t T = (time(NULL) - T0) / X;

	if (hotp_generate(secret, secret_len, T, output_otp) != CRYPTO_SUCCESS)
		return CRYPTO_ERROR;

	return CRYPTO_SUCCESS;
}
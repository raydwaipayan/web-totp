/* hotp.h - HOTP generation library according to rfc4226
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

#include "hmac.h"
#include "sha1.h"
#include <stdint.h>
#define CRYPTO_ERROR -1
#define CRYPTO_SUCCESS 0
/*
 * Generates a hotp from the given secret and moving factor.
 * @secret: the shared secret string
 * @secret_len: length of the shared secret string
 * @moving_factor: counter for the hotp generation
 * @output_otp: output buffer to store the generated hotp
 */
int
hotp_generate(const char *secret,
			  size_t secret_len,
			  uint64_t moving_factor,
			  char *output_otp);
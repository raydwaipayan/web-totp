/* totp.h - TOTP generation library according to rfc6238
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
   Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA */

#include "hotp.h"
#include <stdint.h>

/*
 * Generates a totp from the given secret
 * @secret: the shared secret string
 * @secret_len: length of shared secret
 * @T0: Initial time step (default = 0)
 * @X: System parameter for time block (default = 30)
 */
int
totp_generate(const char *secret,
			  size_t secret_len,
			  uint64_t T0,
			  uint64_t X,
			  char *output_otp);

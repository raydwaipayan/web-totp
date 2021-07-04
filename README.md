## Web - TOTP

A totp generation web application with webassembly hooks.

### Table of Contents
1. [Installation](#installation)
2. [WASM](#wasm)

<a name="installation"></a>
Get the Emscripten SDK, using these instructions:
https://emscripten.org/docs/getting_started/downloads.html

<a name="wasm"></a>
### Web Assembly
Web Assembly allows us to run code written in multiple
languages on the web at near native speed.

#### Why did we need wasm?
Totp calculation in c will be faster than any javascript
crypto library. Using wasm is  expected to provide a huge
performance gain. The HMAC-SHA1 code was taken from a reliable
open source implementation. The hotp and totp wrapper were
written following the rfc specifications (rfc 4226 and rfc 6238
respectively).

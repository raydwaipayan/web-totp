## Web - TOTP

A Totp generation react web application with WebAssembly hooks.

### Table of Contents
- [Introduction](#introduction)
- [Build Process](#build)
- [WASM](#wasm)

<a name="introduction"></a>
### Introduction
Manage your authentication codes using a simple browser based
pwa. It's built on react along with web assembly bindings to
ensure predictable performance for totp generation. All your
authentication codes are stored in local storage and can be
exported or erased at your will.

<a name="build"></a>
### Build Process
The wasm binaries are already compiled and stored in the public
folder. So it just requires you to install the npm modules:

```bash
npm start
```

However, if you want to modify the wasm, you first need to
get the Emscripten SDK, using these instructions:
https://emscripten.org/docs/getting_started/downloads.html

Then to compile and post the wasm bytecode a neat little
makefile will do the trick:
```bash
cd wasm
make
```

<a name="wasm"></a>
### Web Assembly
Web Assembly is a low-level virtual machine that runs the bytecode
that is stored in .wasm files. This byte code is strongly typed
and structured in such a way that it can be compiled and optimized
for the host system much quicker than JavaScript can.

#### Why did we need wasm?
In general, JavaScript and WebAssembly can achieve the same peak performance.
However, for JavaScript this performance can only be reached on the
"fast path", and it's often tricky to stay on that "fast path".
One key benefit that WebAssembly offers is predictable performance,
even across browsers.

Some reference: https://developers.google.com/web/updates/2019/02/hotpath-with-wasm

Totp calculation in native c seemed to be one of those use cases,
which needs predictable performance on the web. It is a pure computational
code and is expected to be highly fast when used via wasm rather than
js libraries. Although note that no performance benchmarks were done yet.

For our implementation, the HMAC-SHA1 code was taken from a reliable
open source implementation. The hotp and totp wrapper were then
written following the rfc specifications (rfc 4226 and rfc 6238
respectively).

The c bindings are then compiled using emcc with the -O3 optimization level:
```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]' \
-I ./lib lib/*.c hotp.c totp.c wasm_entrypoint.c -o totp.js
```

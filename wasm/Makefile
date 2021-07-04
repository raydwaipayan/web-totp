FILES = lib/*.c
FILES += hotp.c totp.c wasm_entrypoint.c
INCLUDES = ./lib
OPTS = -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["ccall", "cwrap"]'
EXTRA_OPTS = -s MODULARIZE=1 -s EXPORT_ES6=1 -s ENVIRONMENT='web'
OUTPUT = totp
DEPLOY_DIR = ../public
CC = emcc

all:
	make build
	make deploy
	make clean
build:
	$(CC) $(OPTS) -I $(INCLUDES) $(FILES) -o $(OUTPUT).js
deploy:
	cp $(OUTPUT).js $(OUTPUT).wasm $(DEPLOY_DIR)
clean:
	rm $(OUTPUT).js $(OUTPUT).wasm
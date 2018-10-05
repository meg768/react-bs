

start:
	npm run start

build:
	npm run build

demo: build
	npm run demo

transpile:
	npm run transpile

publish: transpile
	npm publish

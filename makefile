

start:
	npm run start

build:
	npm run build

demo:
	npm run deploy

transpile:
	npm run transpile

publish: transpile
	npm publish

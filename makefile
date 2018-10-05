
start:
	npm run start

increase-package-version:
	npm run increase-package-version

build:
	npm run build

demo: build
	npm run demo

transpile:
	npm run transpile

publish: transpile increase-package-version
	npm publish

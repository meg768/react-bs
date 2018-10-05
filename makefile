
start:
	npm run start

increase-package-version:
	node ./scripts/increase-package-version.js

build:
	npm run build

demo: build
	npm run demo

transpile:
	npm run transpile

publish: transpile increase-package-version
	npm publish

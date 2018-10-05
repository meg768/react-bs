
run:
	webpack-dev-server --mode development

increase-package-version:
	node ./scripts/increase-package-version.js

build:
	webpack --mode production

demo: build
	gh-pages -d examples/dist

transpile:
	babel src -d dist --copy-files

publish: transpile increase-package-version
	npm publish


var Path = require('path');
var fs = require('fs');


/*
function getJS(path) {

    var files = [];


    fs.readdirSync(path).forEach((file) => {
        var fileName = Path.join(path, file);
        var parts = Path.parse(fileName);
        var stat = fs.statSync(fileName);

//        console.log('FILE NAME', fileName, parts);

        if (stat.isDirectory()) {
        }
        else {
            if (parts.ext == '.js') {

                files.push(fileName);

            }
        }
    });

    return files;


}

function getFiles(path) {

    var files = [];


    fs.readdirSync(path).forEach((file) => {
        var fileName = Path.join(path, file);
        var parts = Path.parse(fileName);
        var stat = fs.statSync(fileName);

//        console.log('FILE NAME', fileName, parts);

        if (stat.isDirectory()) {

            getFiles(fileName).forEach((file) => {
                files.push(file);
            });
        }
        else {
            if (parts.ext == '.js') {

                console.log(`./${fileName}, `);
                files.push(`./${fileName}`);

            }
        }
    });

    return files;


}

function sortFiles(files) {

    
}


var files = getFiles('./src');
console.log(files);

*/
module.exports = {

    usageMode: 'expand',

    skipComponentsWithoutExample: true,


    components: [
        './src/alert/alert.js',
        './src/alert/alert-body.js',
        './src/alert/alert-header.js',
        './src/alert/alert-separator.js',

        './src/badge/index.js',
        './src/button/index.js',
        './src/card/index.js',
        './src/col/index.js',
        './src/collapse/index.js',
        './src/container/index.js',
        './src/dropdown/index.js',
        './src/fade/index.js',
        './src/form/index.js',
        './src/icon/index.js',
        './src/icons/index.js',
        './src/index.js',
        './src/jumbotron/index.js',
        './src/list-group/index.js',
        './src/modal/index.js',
        './src/nav/index.js',
        './src/navbar/index.js',
        './src/pill/index.js',
        './src/popover/index.js',
        './src/popper/index.js',
        './src/progress/index.js',
        './src/row/index.js',
        './src/spinner/index.js',
        './src/table/index.js',
        './src/tag/index.js',
        './src/toast/index.js',
        './src/utils/index.js'
    ],

    moduleAliases: {
        'react-bootify': Path.resolve(__dirname, 'src')
    },
    require: ['./styleguide.css']

  
};


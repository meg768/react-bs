var path = require('path');
var fs = require('fs');
var theme = 'materia';

function getBootstrapCSS(skin) {

    function fileExists(path) {

        try {
            fs.accessSync(path);		
            return true;
        }
        catch (error) {
        }
    
        return false;		
    }    
    
    var cssFile = `./bootswatch/${skin}/bootstrap.min.css`;

    if (fileExists(cssFile)) {
        return cssFile;
    }
    
    return './bootstrap/bootstrap.min.css';
}

module.exports = {
    components: [
        './src/*/*.js'
    ],
    require: ['./styleguide.css']
};


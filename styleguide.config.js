const path = require('path');

module.exports = {
    components: './src/core/*.js',
    require: ['./src/bootstrap/bootstrap.min.css'],
    ignore: ['**/src/core/template.js', '**/src/core/component.js', '**/src/core/utils.js', '**/src/core/tag.js']    
};
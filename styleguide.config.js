const path = require('path');

module.exports = {
    components: 'src/*.js',
    require: ['./bootstrap/bootstrap.min.css'],
    ignore: ['**/src/index.js', '**/src/template.js', '**/src/component.js', '**/src/utils.js', '**/src/tag.js']    
};
const path = require('path');

module.exports = {
    components: './src/components/*.js',
    require: ['./src/bootstrap/bootstrap.min.css'],
    ignore: ['**/src/components/template.js', '**/src/components/component.js', '**/src/components/utils.js', '**/src/components/tag.js']    
};
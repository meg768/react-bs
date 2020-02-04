
var path = require('path');

module.exports = {
    components: [
        './src/*/*.js'
    ],
    moduleAliases: {
        'react-bootify': path.resolve(__dirname, 'src')
    },
    require: ['./styleguide.css']

  
};


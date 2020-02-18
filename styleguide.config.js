
var Path = require('path');
var fs = require('fs');

module.exports = {

    usageMode: 'expand',

    skipComponentsWithoutExample: false,


    components: [
        './src/alert/alert.js',
        './src/alert/alert-body.js',
        './src/alert/alert-header.js',
        './src/alert/alert-separator.js',

        './src/badge/index.js',
        './src/button/index.js',

        './src/card/card.js',
        './src/card/card-body.js',
        './src/card/card-header.js',
        './src/card/card-subtitle.js',
        './src/card/card-text.js',
        './src/card/card-title.js',

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

        './src/nav/nav.js',
        './src/nav/item.js',
        './src/nav/link.js',

        './src/navbar/navbar.js',
        './src/navbar/brand.js',
        './src/navbar/collapse.js',
        './src/navbar/nav.js',
        './src/navbar/toggler.js',

        './src/pill/index.js',
        './src/popover/index.js',
        './src/popper/index.js',


        './src/progress/progress.js',
        './src/progress/progress-bar.js',


        './src/row/index.js',
        './src/spinner/index.js',

        './src/table/table.js',
        './src/table/body.js',
        './src/table/col.js',
        './src/table/header.js',
        './src/table/row.js',
        
        './src/tag/index.js',

        './src/toast/toast.js',
        './src/toast/body.js',
        './src/toast/header.js',
        './src/toast/subtitle.js',
        './src/toast/title.js',
        
        './src/utils/index.js'
    ],

    moduleAliases: {
        'react-bootify': Path.resolve(__dirname, 'src')
    },
    require: ['./styleguide.css']

  
};



module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  }
                ]
            },

            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader'
                  }
                ]
            },

            {
                test: /\.svg$/,
                use: ['react-svg-loader']
            }            


        ]
    }
};




const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "production" || "development",
    //devtool: "inline-source-map",
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist')
    }
};
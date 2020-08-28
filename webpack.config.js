const path = require('path');


module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'RICNSmartApi', // 对外暴露的库名，如果没有，则直接暴露方法，例如axios，如果不指定库命，则直接使用方法get()
        libraryTarget: 'umd', // 使库在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。
        filename: process.env.NODE_ENV === 'development' ? 'ricnsmart-iot-js-sdk.js' : 'ricnsmart-iot-js-sdk.min.js'
    },
    // 开启调试
    devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
    mode: process.env.NODE_ENV
};

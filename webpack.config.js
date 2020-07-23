const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        "register": "./register.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "[name].js",
        publicPath: '/dist/',
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".css", ".less"],
    },
    node: {
        fs: 'empty'
    },
};

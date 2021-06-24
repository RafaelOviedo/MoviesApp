const dotenv = require("dotenv");
const webpack = require("webpack");

module.exports = () => {
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    return {
        /* ... here should be your previous module.exports object attributes */
        entry: ["babel-polyfill", "./src/index.js"],
        output: {
            path: path.join(__dirname, "build"),
            filename: "bundle.js",
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "./index.html",
            }),
            new webpack.DefinePlugin(envKeys),
        ],
    };
};

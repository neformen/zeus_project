const path = require("path");
const fs = require("fs");

const nodeModules = {};
fs.readdirSync("node_modules")
    .filter((x) => ![".bin"].includes(x))
    .forEach((mod) => {
        nodeModules[mod] = `commonjs ${mod}`
    });

module.exports = {
    entry: "./src/index.ts",
    target: "node",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: "tslint-loader"
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: nodeModules
};
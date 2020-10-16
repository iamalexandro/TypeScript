module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/03-class/app02.ts",
    output: {
      filename: "app02.js",
      path: __dirname + './dist/03-class'
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    devServer: {
      port: 8000
    }
  };

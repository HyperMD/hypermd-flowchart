const { PBEContext } = require('@hypermd/build-tools/lib/pbe')
const pbeCtx = new PBEContext()
pbeCtx.loadManifest("./pbe.manifest.json")

module.exports = {
  entry: "./src/index",
  output: {
    path: __dirname,
    filename: "index.js",
    library: pbeCtx.lookupTable['./index'].split('.'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: pbeCtx.getWebpackExternalsFunction(),
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
};
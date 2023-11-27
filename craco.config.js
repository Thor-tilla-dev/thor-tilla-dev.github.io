const webpack = require("webpack");
const CracoEsbuildPlugin = require("craco-esbuild");

const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@includes": path.resolve(__dirname, "src/includes"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@localStorage": path.resolve(__dirname, "src/services/localStorage"),
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react",
      }),
    ],
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        enableSvgr: true, // Optional.
        esbuildLoaderOptions: {
          loader: "tsx", // Set the value to 'tsx' if you use typescript
          target: "es2019",
        },
        esbuildMinimizerOptions: {
          target: "es2019",
          css: true, // if true, OptimizeCssAssetsWebpackPlugin will also be replaced by esbuild.
        },
        skipEsbuildJest: false, // Optional. Set to true if you want to use babel for jest tests,
        esbuildJestOptions: {
          loaders: {
            ".ts": "ts",
            ".tsx": "tsx",
          },
        },
      },
    },
  ],
};

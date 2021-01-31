module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: [Path.join(__dirname, "src/assets")],
        loader: "file-loader?name=assets/[name].[ext]",
      },
    ],
  },
};

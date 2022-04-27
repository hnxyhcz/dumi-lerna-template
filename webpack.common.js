module.exports = {
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.json', '.js'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     }
  //   ],
  // },
  externals: [
    {
      react: 'React',
    },
  ],
};

module.exports = {
  entry: {
    app: './src/index.jsx',
  },

  output: {
    path: '../app/assets/javascripts/webpack',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
        }
      },
    ]
  },
};
module.exports = {
  // ... otras configuraciones de webpack

  module: {
    rules: [
      // ... otras reglas

      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "videos/", // o la ruta de salida deseada
              publicPath: "videos/", // o la ruta pública deseada
            },
          },
        ],
      },
    ],
  },
};

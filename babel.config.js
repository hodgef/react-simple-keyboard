module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/env",
      {
        corejs: "3",
        useBuiltIns: "entry",
        targets: {
          browsers: [
            "edge >= 16",
            "safari >= 9",
            "firefox >= 57",
            "ie >= 11",
            "ios >= 9",
            "chrome >= 49",
          ],
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-transform-typescript"],
  ],
};

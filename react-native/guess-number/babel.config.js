module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./components",
            "@screens": "./screens",
            "@constants": "./constants",
            "@fonts": "./assets/fonts",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};

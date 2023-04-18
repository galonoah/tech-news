module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            ["@"]: "./",
            components: "./src/components",
            screens: "./src/screens",
            hooks: "./src/hooks",
            assets: "./assets",
            context: "./src/context",
            services: "./src/services",
            utils: "./src/utils",
          },
        },
      ],
      [
        "react-native-reanimated/plugin",
        {
          relativeSourceLocation: true,
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};

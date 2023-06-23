const { useBabelRc, override } = require("customize-cra");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = override(useBabelRc(), (config, env) => {
  if (env === "production") {
    config.plugins.push(new GenerateSW());
  }

  return config;
});

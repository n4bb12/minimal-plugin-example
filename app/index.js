const { resolve } = require("path");

const config = require(resolve("config.json"));

for (const plugin of config.enabledPlugins) {
  require(resolve(config.pluginDir, plugin));
}

const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#D8B147",
          "@link-color": "#1DA57A",
          "@font-size-base": "22px",
          "@layout-header-background": "#171B24",
          "@layout-trigger-background": "#252b39",
        },
      },
    },
  ],
};

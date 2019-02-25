module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@nui": "nucleus-ui/src/components"
      }
    }
  }
};

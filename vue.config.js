const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: process.env.VUE_APP_OUT_PUT_NAME,
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    open: false,
    port: 8030,
    https: false,
    hot: true,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "https://message.pharmablock.com", //http://172.16.28.143:8003
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "南京药石科技股份有限公司";
      return args;
    });
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            "primary-color": "#2A7ED7",
            "link-color": "#2A7ED7",
            "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
});


const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/j",
    createProxyMiddleware({
      target: "https://movie.douban.com/",
      changeOrigin: true,
    })
  );
};

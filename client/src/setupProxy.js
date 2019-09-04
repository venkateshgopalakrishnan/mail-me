const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy(["/api", "/auth/google", "/auth/linkedin"], { target: "http://localhost:5000" }));
};

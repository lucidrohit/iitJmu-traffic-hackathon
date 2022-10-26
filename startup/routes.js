const admin = require("../routes/admin");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use("/admin", admin);
  app.use(error);
};

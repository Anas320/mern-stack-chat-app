const normalizePath = require("path").join(__dirname, "../app/routes");
const path = "../app/routes/";

module.exports = (app) => {
  require("fs")
    .readdirSync(normalizePath)
    .forEach((file) => {
      require(path + file)(app);
    });
};

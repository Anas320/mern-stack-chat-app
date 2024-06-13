module.exports = (app) => {
  const { register, login } = require("@controllers/userController");
  app.post("/register", register);
  app.post("/login", login);
};

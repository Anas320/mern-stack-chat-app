module.exports = (app) => {
  const {
    getMessages,
    sendMessage,
  } = require("@controllers/messageController");
  const authenticate = require("@middlewares/authMiddleware");
  app.get("/messages", authenticate, getMessages);
  app.post("/messages", authenticate, sendMessage);
};

const { db } = require("@app/config/db");

const messagesCollection = db.collection("messages", {
  primaryKey: "id",
  schema: {
    fields: {
      id: { type: "uuid" },
      userId: { type: "uuid" },
      username: { type: "text" },
      content: { type: "text" },
      timestamp: { type: "timestamp" },
    },
  },
});

module.exports = messagesCollection;

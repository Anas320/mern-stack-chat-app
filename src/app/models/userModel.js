const { db } = require("@app/config/db");

const usersCollection = db.collection("users", {
  primaryKey: "id",
  schema: {
    fields: {
      id: { type: "uuid" },
      username: { type: "text" },
      password: { type: "text" },
    },
  },
});

module.exports = usersCollection;

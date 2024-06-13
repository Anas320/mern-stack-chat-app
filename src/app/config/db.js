const { DataAPIClient } = require("@datastax/astra-db-ts");

console.log(
  "process.env.ASTRA_DB_APPLICATION_TOKEN : ",
  process.env.ASTRA_DB_APPLICATION_TOKEN
);
const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_KEYSPACE);

(async () => {
  try {
    const colls = await db.listCollections();
    console.log("Connected to AstraDB:", colls);
  } catch (err) {
    console.error("Error connecting to AstraDB:", err);
  }
})();

module.exports = { db };

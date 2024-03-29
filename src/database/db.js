const mongoose = require("mongoose");

let conn = null;

module.exports = connectDatabase = async () => {
  if (conn == null) {
    console.log("Creating a new connection to the database...");
    conn = await mongoose.connect(process.env.DATABASE_URL, {
      serverSelectionTimeoutMS: 5000,
    });
    return conn;
  }

  console.log("Connection already established, reusing the connection");
};

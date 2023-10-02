const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// connect to database

mongoose.connect("mongodb+srv://santoshbishwas99:K8CiQpa7vTwaV0Wt@cluster0.kvl6obn.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Can't connect to MongoDb"));

// if connection is successful
db.once("open", () => {
  console.log("Data Base will Connected");
});

module.exports = db;

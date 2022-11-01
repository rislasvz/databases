const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://rislas:OK1u6iJzOBMYwxG2@cluster0.hud9yvm.mongodb.net/STORE?retryWrites=true&w=majority"

const db = async () => {
  await mongoose.connect(MONGO_URL)
  .then(() => console.log("Conectados a MongoDB 🤖"))
  .catch((error) => console.error("❌ Error al conectarse a MongoDB", error));
};


module.exports = db


const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin-ayush:1FjaDeuIbWmb5Apm@cluster0.alop5hl.mongodb.net/fileUploadTestDB"
    );
    console.log("connected");
  } catch (error) {
    console.log(error.message);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = main;

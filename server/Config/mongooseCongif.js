const mongoose = require("mongoose");

module.exports = (DB_Name) => {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/${DB_Name}`,{
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
    .then(() => console.log(`Connection Established with ${DB_Name} `))
    .catch((err) => console.log(`Cannot connect to ${DB_Name}`, err));
};

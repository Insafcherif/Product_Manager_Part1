const express = require("express");
const cors = require("cors");
const PORT = 8000;
const DB_Name = "product_db";
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("./Config/mongooseCongif")(DB_Name)

require("./Routes/ProductRoutes")(app)

app.listen(PORT, ()=> console.log(`Server in running on ${PORT}`))
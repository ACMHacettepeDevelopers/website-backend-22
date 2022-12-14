const express = require("express");
require("dotenv").config();

const connectToMongo = require("./db/connection");

const adminRoutes = require("./routes/admin");
const memberRoutes = require("./routes/member");

const app = express();
const port = process.env.NODE_LOCAL_PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/member", memberRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

module.exports = app;
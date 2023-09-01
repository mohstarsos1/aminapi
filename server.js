const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.APP_PORT || 8000;

const aboutRouter = require("./routes/about");

app.use("/api", aboutRouter);

app.listen(port, () => {
  console.log(`Server is runnig on port: ${port}`);
});

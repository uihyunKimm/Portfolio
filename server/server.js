const express = require('express');
const app = express();

const index = require("./router/index");
const PORT = 8080;
app.use("/", index);

  app.listen(8080, () => console.log(`Server is running on PORT : ${PORT}`));
  
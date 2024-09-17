require("dotenv").config();
const { PORT } = process.env;
const express = require("express");
const app = express();

// test
app.get("/", (req, res) => {
    res.send("test route");
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
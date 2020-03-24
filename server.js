const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html")(app)
require("./routes/api.js");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gitbuff-academy", {
    useNewUrlParser: true,
    useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});
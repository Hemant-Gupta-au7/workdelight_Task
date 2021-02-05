var express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var adminSignUp = require("./routes/routes/adminAuthentication");
var app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//USER ROUTE
app.use("/", adminSignUp);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//DATA_BASE COLLECTION
mongoose.connect("mongodb+srv://hemant1234:3LPDFYFHainIHljg@cluster0.fasyy.mongodb.net/padhakool?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);
mongoose.connection.on("connected", () => {
  console.log("CONNECTED TO DATA BASE ");
});
mongoose.connection.on("error", (err) => {
  console.log("oops! error occured", err);
});

//PORT CONNECTION
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listining to port ${port}`);
});

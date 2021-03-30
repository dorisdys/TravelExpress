// Youness, Foluke, and Yisi: all participate for runing the back end
const path = require("path");
var dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const viewRouter = require("./routes/viewRoutes");
const viewsController = require("./controllers/viewsController");
const app = express();
const port = 3005;
const bodyParser = require("body-parser");

// setup pug engine
//you have to install pug npm i pug
app.set("view engine", "pug"); // to tell express what template engine we going to use
app.set("views", path.join(__dirname, "views")); // to identify wich folder our views located

//to specify .env path:
dotenv.config({ path: "./config.env" });
//to connect to the database:
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection succesfully");
  });

//create reservation schema

const reservationSchema = {
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phonenumber: {
    type: Number,
  },
  package: {
    type: String,
  },
  reservationID: {
    type: Number,
  },
  agent: {
    type: String,
  },
};

const Reservation = mongoose.model("Reservation", reservationSchema);

app.get("/reservation", function (req, res) {
  res.status(200).render("reservation", {
    title: "Reservation",
  });
});

app.post("/reservation", function (req, res) {
  let newReservation = new Reservation({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    package: req.body.packageoption,
    reservationID: req.body.reservationid,
    agent: req.body.agent,
  });
  newReservation.save();

  res.redirect("/reservation");
});
//////////////////////////////////////////

//////////////////////////////////////////
//Static files
app.use(express.static("public"));

app.use("/", viewRouter);

app.listen(port, () => {
  console.log(`Running on server ${port}...`);
});

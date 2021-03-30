const Package = require("../models/packageOverview");
const catchAsync = require("../utils/catchAsync");
const Reservation = require("../models/reservation");
const router = require("../routes/viewRoutes");

exports.getOverview = catchAsync(async (req, res, next) => {
  //1) Get tour data from collection
  const packages = await Package.find();
  //2) Build template
  //3) Render that template using tour data from 1
  res.status(200).render("overview", {
    title: "All Packages",
    packages,
  });
});
exports.getIndex = (req, res) => {
  res.status(200).render("index", {
    title: "Home",
  });
};

exports.getReservation = (req, res) => {
  res.status(200).render("reservation", {
    title: "Reservations",
  });
};

exports.getAbout = (req, res) => {
  res.status(200).render("about", {
    title: "About Us",
  });
};
exports.getDestination = (req, res) => {
  res.status(200).render("destination", {
    title: "Destination",
  });
};
exports.getContact = (req, res) => {
  res.status(200).render("contact", {
    title: "Contact Us",
  });
};
exports.getEgypt = (req, res) => {
  res.status(200).render("egypt", {
    title: "Egypt",
  });
};
exports.getJamaica = (req, res) => {
  res.status(200).render("jamaica", {
    title: "Jamaica",
  });
};
exports.getMexico = (req, res) => {
  res.status(200).render("mexico", {
    title: "Mexico",
  });
};
exports.getMorocco = (req, res) => {
  res.status(200).render("morocco", {
    title: "Morocco",
  });
};
exports.getRegister = (req, res) => {
  res.status(200).render("register", {
    title: "Register",
  });
};

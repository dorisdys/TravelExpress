const express = require("express");
const viewsController = require("../controllers/viewsController");
const router = express.Router();

// route for the overview packages page
router.get("/overview", viewsController.getOverview);

router.get("/", viewsController.getIndex);
router.get("/about", viewsController.getAbout);
router.get("/destination", viewsController.getDestination);
router.get("/contact", viewsController.getContact);
router.get("/egypt", viewsController.getEgypt);
router.get("/jamaica", viewsController.getJamaica);
router.get("/mexico", viewsController.getMexico);
router.get("/morocco", viewsController.getMorocco);

// route for the each-package-details packages page
router.get("/reservation", viewsController.getReservation);
router.get("/register", viewsController.getRegister);
module.exports = router;

const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const packageSchema = new Schema({
  PackageId: {
    type: Number,
    unique: true,
  },
  PkgName: {
    type: String,
  },
  PkgDesc: {
    type: String,
  },
  PkgBasePrice: {
    type: Number,
  },
  Img: {
    type: String,
  },
});
const Package = mongoose.model("Package", packageSchema);
module.exports = Package;

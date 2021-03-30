const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser")

var fs = require('fs');
var path = require('path');
require('dotenv/config');

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
	});

const packagesSchema = {
        PackageId:Number,
        PkgName:String,
        PkgStartDate:Date,
        PkgEndDate:Date,
        PkgDesc:String,
        PkgBasePrice:Number,
        PkgAgencyCommission:String,
        Img:Buffer


}

const Packages = mongoose.model('Packages',packagesSchema);

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
    
})

app.post("/",function(req,res){
    let newPackages = new Packages({
        PackageId:req.body.pkgid,
        PkgName:req.body.pkgname,
        PkgStartDate:req.body.pkgstartdate,
        PkgEndDate:req.body.pkgenddate,
        PkgDesc:req.body.pkgdesc,
        PkgBasePrice:req.body.pkgprice,
        PkgAgencyCommission:req.body.pkgcommission,
        Img:{
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
        }
        
    });
    newPackages.save();
    res.redirect('/');
})


app.listen(4000, function(){
    console.log('server is running');
})
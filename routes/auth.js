const express = require('express');
const Crime= require("../models/CrimeSchema")
const router= express.Router();

const app=express();
router.get('/', (req,res)=>{
    console.log(req.body);
    const crime = Crime(req.body);
    crime.save()
    res.send(req.body);
})

module.exports = router
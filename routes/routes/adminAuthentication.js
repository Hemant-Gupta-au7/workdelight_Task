var express = require("express");

var adminAuthentication=require('../../controllers/controllers/adminAuth')
var adminAuthenticationData=new adminAuthentication()
var authentication_Route = express.Router();


// -------------------------------------ADMIN SIGN_IN------------------------------------------------ 

authentication_Route.post('/adminSignIn',adminAuthenticationData.getRegistrationData)


// --------------------------------------ADMIN SIGN_UP-------------------------------------------------------

authentication_Route.post('/adminSignUp',adminAuthenticationData.postRegistrationData)









module.exports = authentication_Route;
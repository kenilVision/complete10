const express = require("express")
const  ProfileController = require("../Controller/ProfileController")
routes = express.Router();
const Auth = require('../../Middleware/Authentication')

routes.get("/",Auth,ProfileController.ProfileInfo)
routes.post("/Signup",ProfileController.SignUp )
routes.post("/login",ProfileController.Login )

module.exports = routes;


// for profile route
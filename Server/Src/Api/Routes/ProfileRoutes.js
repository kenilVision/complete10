const express = require("express")
const  ProfileController = require("../Controller/ProfileController")
routes = express.Router();
const Auth = require('../../Middleware/Authentication')

routes.get("/",Auth,ProfileController.ProfileInfo)
routes.post("/Signup",ProfileController.SignUp )
routes.post("/login",ProfileController.Login )

module.exports = routes;


// completed basic FE BE application ,set nav bar set up with routing, redux flow setup, working on BE profile ADD and Authentication
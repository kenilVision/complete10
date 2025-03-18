const express = require("express")
const  ProfileController = require("../Controller/ProfileController")
routes = express.Router();

routes.get("/",ProfileController.ProfileInfo)
routes.post("/Signup",ProfileController.AddUserInfo )
routes.post("/login",ProfileController.AuthenticateInfo )

module.exports = routes;


// completed basic FE BE application ,set nav bar set up with routing, redux flow setup, working on BE profile ADD and Authentication
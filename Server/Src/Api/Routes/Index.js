const express = require("express")
const Profile = require('./ProfileRoutes')
const User = require('./UserRouter')
routes = express.Router();

routes.use("/Profile",Profile)
routes.use("/User",User)

module.exports = routes;
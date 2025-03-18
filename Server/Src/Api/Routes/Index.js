const express = require("express")
const Profile = require('./ProfileRoutes')
routes = express.Router();

routes.use("/Profile",Profile)

module.exports = routes;
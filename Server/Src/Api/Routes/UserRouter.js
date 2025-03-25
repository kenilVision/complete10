const controller = require("../Controller/UserController")
const express = require("express")
const upload =  require('../../Utilites/Multer')
const Auth = require('../../Middleware/Authentication')
const routes = express.Router();

routes.get("/",Auth, controller.UsersInfo)
routes.get("/:id",Auth, controller.UserInfo)
routes.post("/",Auth,upload.single('file'),controller.AddUserInfo )
routes.put("/",Auth,upload.single('file'),controller.UpdateUserInfo)
routes.delete("/:id",Auth,controller.DeleteUserInfo)

module.exports = routes;    
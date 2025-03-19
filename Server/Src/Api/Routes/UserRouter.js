const controller = require("../Controller/UserController")
const express = require("express")
const upload =  require('../../Utilites/Multer')

const routes = express.Router();

routes.get("/", controller.UsersInfo)
routes.get("/:id", controller.UserInfo)
routes.post("/",upload.single('file'),controller.AddUserInfo )
routes.put("/",upload.single('file'),controller.UpdateUserInfo)
routes.delete("/:id",controller.DeleteUserInfo)

module.exports = routes;    
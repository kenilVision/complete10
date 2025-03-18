const profile = require("../../db/ProfileModel")
const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET = process.env.SECRET_KEY;


exports.ProfileInfo = async (req, res) =>{
    try{
            const id = await req._id
            const data  =  await profile.findById(id)
    
            if(data!= null){
                res.send(data)
            }
            else{
                res.send({message:"no data found"})
            }
    
        }
        catch{
            res.send({message:"api fail"})
        }
}

exports.AddUserInfo = async (req, res) =>{
    try{
        const data = await profile(req.body) 
        data.MobileNumber = parseInt(data.MobileNumber, 10);
        await data.save()
        res.send(data)
    }
    catch{
        res.send({message:"fail to add data"})
    }

}

exports.AuthenticateInfo = async (req, res) =>{
    try {
            const { Email, Password } = req.body;
    
           
            const user = await profile.findOne({ Email });
    
            if (!user) {
                return res.status(404).send({ message: 'User not found' });
            }
    
            
            if (user.Password !== Password) {
                return res.status(400).send({ message: 'Invalid password' });
            }
    
           
            const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '24h' });
            return res.status(200).json({ token });
        } catch (error) {
            console.error("Error in login API:", error);
            return res.status(500).send({ message: "Internal Server Error" });
        }
}
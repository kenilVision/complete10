const profile = require("../../modal/ProfileModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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
        catch(err){
            res.send({message:"api fail"})
        }
}

exports.SignUp = async (req, res) =>{
    try{
            const data = await profile(req.body) 
            data.MobileNumber = parseInt(data.MobileNumber, 10);
            await data.save()
            res.status(200).send(data)
    }
    catch{
        res.status(500).send({message:"fail to add data"})
    }   

}

exports.Login = async (req, res) =>{
    try {

                    const { Email, Password } = req.body;
                    console.log(Password)
                    const user = await profile.findOne({ Email });
                    if (!user) {
                        return res.status(404).send({ message: 'User not found' });
                    }
                    console.log(user.Password)
                    
                    const isPasswordValid = await bcrypt.compare(Password, user.Password);
                    if (!isPasswordValid) {
                        return res.status(400).send({ message: 'Invalid password' });
                    }

               
                    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: '24h' });
                    console.log(token)
                    return res.status(200).json({ token });
               

        } catch (error) {
            console.error("Error in login API:", error);
             res.status(500).send({ message: "Internal Server Error" });
        }
}
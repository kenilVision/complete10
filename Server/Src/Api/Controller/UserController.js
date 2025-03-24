const model = require("../../DB/UserModel")
const fs = require('fs')
const path = require('path')



exports.UsersInfo = async (req, res) => {
    try {
        const page =  Number(req.query.page) || 1 ;
        const limit = Number(req.query.limit) || 3;
        const skip = (page-1)*limit
        const search = req.query.search || ""
        const sort = req.query.sort || ""
        const query = {
            $or: [
                { "FirstName": { $regex: search, $options: 'i' } },
                { "LastName": { $regex: search, $options: 'i' } },
                { "Email": { $regex: search, $options: 'i' } }    
            ]
        };
        const totalItems = await model.countDocuments(query);

        let data;
        if (sort) {
            data = await model.find(query).sort(sort).skip(skip).limit(limit);
        } else {
            data = await model.find(query).skip(skip).limit(limit);
        }
        const NewData = data.map(profile => ({...profile.toObject(),
            url: `http://localhost:5000/uploads/${profile.filename}`
          }));
        if (NewData.length > 0) {  
            res.status(200).send({
                totalPages: Math.ceil(totalItems / limit),
                user: NewData
              });
        } else {
            res.status(404).send({ message: "No data found" });
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "API failed to fetch users" });
    }
};

exports.UserInfo = async (req, res) => {
    try {
        const data = await model.findById(req.params.id);
        console.log(data)
        const NewData = {
            ...data.toObject(),  
            url: `http://localhost:5000/uploads/${data.filename}` 
        };

        res.status(200).json(NewData);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "API failed to fetch users" });
    }
};




exports.AddUserInfo = async (req, res) => {
    try {
       
        const { MobileNumber, Email } = req.body;

        if (!Email || Email.trim() === '') {
            return res.status(400).send({ message: "Email is required" });
        }

        if (!MobileNumber || isNaN(MobileNumber) ) {
            return res.status(400).send({ message: "Valid Mobile Number is required" ,flag:2 });
        }
        if (MobileNumber.toString().length != 10 ) {
            console.log(MobileNumber.toString().length)
            return res.status(400).send({ message: "Valid Mobile Number is required" ,flag:2 });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
          }
          
        req.body.MobileNumber = parseInt(MobileNumber, 10);
    
        
        const data = new model({
            ...req.body,              
            filename: req.file.filename 
          });
      
        await data.save();


        res.status(200).send(data);
    } catch (error) {
        console.error("Error adding user info:", error);
        res.status(500).send({ message: "Fail to add data" });
    }
};




exports.UpdateUserInfo = async (req, res) => {
    try {
        const id = req.body._id;

        const userData = await model.findById(id);
        if (!userData) {
            return res.status(404).send({ message: "No data found for the provided ID" });
        }

        if (req.body.email && req.body.email !== userData.email) {
            const emailExists = await model.findOne({ email: newEmail });
            if (emailExists) {
                return res.status(400).send({ message: "Email is already in use by another user" });
            }
        }

        let updateData = { ...req.body };
        if (req.file) {
            updateData.filename = req.file.filename;
        
            if (userData.filename) {  
                const oldFilePath = path.join(__dirname, '../../../Upload', userData.filename);
        
              
                fs.unlink(oldFilePath, function (err) {
                    if (err) {
                        if (err.code === 'ENOENT') {
                            console.log('Old file not found, nothing to delete.');
                        } else {console.error('Error deleting the old file:', err);}
                    } 
                    else {
                        console.log('Old file deleted successfully.');
                    }
                });
            }
        }
        

        const updatedData = await model.findByIdAndUpdate(id, updateData, { new: true });

        if (updatedData) {
            
            const wrapper = [
                { message: "old data" },
                userData, 
                { message: "new data" },
                updatedData 
            ];
            res.send(wrapper);
        } else {
            res.status(404).send({ message: "No data found" });
        }
    } catch (error) {
        console.error('Error updating user info:', error);
        res.status(500).send({ message: "API failed", error: error.message });
    }
};



exports.DeleteUserInfo = async (req, res) => {
    try {
        const id = req.params.id;

        const userData = await model.findById(id);
        
        if (!userData) {
            return res.status(404).send({ message: "No data found" });
        }

        const filePath = path.join(__dirname,'../../../Upload',userData.filename);
        fs.unlink(filePath, function (err) {
                if (err) {
                    if (err.code === 'ENOENT') {
                        console.log( err + 'Old file not found, nothing to delete.');
                    } else {console.error('Error deleting the old file:', err);}
                } 
                else {
                    console.log('Old file deleted successfully.');
                }
            });
        
            
        
        await model.findByIdAndDelete(id);

        res.status(200).send({ message: "User and file deleted successfully", userData });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "API failed", error: error.message });
    }
};
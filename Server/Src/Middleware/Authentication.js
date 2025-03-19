const  jwt = require('jsonwebtoken');
const Secret_Key = process.env.SECRET_KEY 

const Auth = async (req,res,next) =>{

    try{

        const token = req.headers['authorization'];
        console.log(token)
        if (!token) {
            return res.status(403).send({ message: 'No token provided' });
        }
        console.log(token)
         jwt.verify(token, Secret_Key, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message:  'Unauthorized' });
                }
                req._id = decoded.id;
                next();
        });
        
    }
    catch(err){

        return res.status(401).send({ message: "Authorization fail" ,
            Err: err}
        );

    }
}


module.exports =  Auth
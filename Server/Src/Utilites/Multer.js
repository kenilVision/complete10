const multer  = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'D:/kenil/Git/complete10/Server/Upload'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); 
  }
});

const upload = multer({ storage: storage });

module.exports = upload
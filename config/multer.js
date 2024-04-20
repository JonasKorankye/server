const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/files/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '-'+ file.originalname)
    }

})


const uploadFile  = multer({storage: storage})


module.exports = uploadFile 
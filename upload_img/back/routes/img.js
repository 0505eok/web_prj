const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const router = express.Router();

fs.readdir('uploads', error => {
    if(error){
        fs.mkdirSync('uploads');
    }
});

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback){
            callback(null,'uploads/');
        },
        filename(req, file, callback){
            const ext = path.extname(file.originalname);
            callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    })
})

router.post('/', upload.array('uploadFiles'), (req, res) => {
    res.json({});
})

module.exports = router;
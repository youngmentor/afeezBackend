const multer= require("multer")

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const memoryStorage= multer.memoryStorage()

const filefilter = (req,file,cb)=>{
    if(file.mimetype.startWith('image/')){
        cb(null,true);
    }else{
        cb(new Error('this file is not supported, image only'),false)
    }
}
const upload = multer({
storage:memoryStorage,
filefilter
})

const uploading = upload.fields([
    {name:"fatherImage",maxCount:1},
    {name:"motherImage",maxCount:1},
    {name:"childrenImages",maxCount:7}
]) 

module.exports = uploading
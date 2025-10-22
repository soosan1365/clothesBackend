import multer from "multer"
// کتابخانه Multer برای مدیریت آپلود فایل 

const storage =multer.diskStorage({
    filename:function(req,file,callback){
callback(null,file.originalname)
    }
 })
const upload =multer({storage:storage})

export default upload
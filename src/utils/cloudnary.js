import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file in cloud nary
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //upload complete
        console.log("file is uploaded in cloudnary ",responce);
        fs.unlinkSync(localFilePath)
        return responce
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove temp file as the upload fail
        return null
    }
}

export {uploadOnCloudinary}
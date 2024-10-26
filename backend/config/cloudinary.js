// GO to website for cloudinary nd login create cloud and copy the api key,secret key and cloud name
//this is file using for image storing 

import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () =>{
    
    cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret :process.env.CLOUDINARY_SECRET_KEY

})

}
export default connectCloudinary;
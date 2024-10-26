import { v2 as cloudinary} from 'cloudinary'
import productModel  from '../models/productModel.js'

//Function for add product
const addProduct = async (req,res) =>{

    try {
        
        const { name, description, price,category,subCategory,sizes,bestseller} = req.body;

        // these && operator using solving the error ex: i forgot to upload one img that img only getting a "undefined"
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]  
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        //its for uploaded only one image u can see that image another three has been removed 
        const images = [ image1,image2,image3,image4 ].filter((item) => item !== undefined)

        //images upload in cloudinary
        let imagesUrl = await Promise.all(
            images.map(async (item) =>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url
            })
        )
            const productData = {
                name,
                description,
                category,
                price:Number(price), 
                subCategory,
                bestseller: bestseller === "true" ? true :false, //actually its an boolean but here we r using string in form data
                sizes: JSON.parse(sizes), //we can't send array directly an form data
                image:imagesUrl,
                date: Date.now()

            }

            console.log(productData);
            
            const product = new productModel(productData)
            await product.save()

            res.json({success:true,message:"Product Added"})

        // res.json({})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Function for List product
const listProduct = async (req,res) =>{

    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}

//Function for remove product
const removeProduct = async (req,res) =>{
     
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Product Removed"})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Function for single product
const singleProduct = async (req,res) =>{

    try {
        
        const { productId } = req.body;
        const product = await productModel.findById(productId)
        res.json({success:true,product})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }

}



export { listProduct,addProduct,removeProduct,singleProduct}
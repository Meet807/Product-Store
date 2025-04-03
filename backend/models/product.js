import mongoose, { model } from "mongoose";

const productSchema = new mongoose.Schema({//creating a schema/table 
    name:{type: String,required: true},//creating object named as name

    price:{type: Number,required: true},//creating object named price
        

    image:{type: String,required: true},//creating object named image
}, 
{
    timestamps:true //makes sure that each document has createdAt and updatedAt feilds
}
);

const Product = mongoose.model('Product',productSchema);//here the P is capital in 'products' and is a singular word as that is how mongoose takes inputs and later it will convert it to plular and first letter lower-case
//mongoose itself makes Product to products in database

export default Product;

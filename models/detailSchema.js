import mongoose from "mongoose";
import validator from "validator";

const detailSchema = new mongoose.Schema({
    name : {
        type : String,
        requried : true ,
        minLength : [3 , "Name must contain at lest 3 charecters"],
        maxLength : [ 30 , "Name cannot exceed over 30 Charecters"]
    },
    email : {
        type : String,
        requried : true ,
        validator : [validator.isEmail , "provide a valid Email"]
    },
    phone : {
        type : String,
        requried : true ,
        minLength : [10 , "Number must contain 10 numbers"],
        maxLength : [10 , "Number must contain 10 numbers"]
    },
    discription : {
        type : String,
        requried : true ,
        minLength : [10 , "Number must contain 10 numbers"],
        maxLength : [500 , "Number must contain 10 numbers"]
    },
})

export const Detail = mongoose.model("Detail", detailSchema);
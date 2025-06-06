import mongoose  from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName : "Cluster0"
    }).then(()=>{
        console.log("Connected to Database Sucessfully!")
    }).catch(err=>{
        console.log(`Some error occured while connecting to Databasa ! ${err}`)
    })
};
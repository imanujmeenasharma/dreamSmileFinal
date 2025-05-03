const mongoose = require("mongoose")

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("MongoDB Connected")
        }).catch((error)=>{
            console.log(error);
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;
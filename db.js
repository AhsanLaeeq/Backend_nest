// const mongoose= require('mongoose');
// const mongoURI="mongodb://localhost:27017/ina"
// const connectToMongo =async()=>{
//         await mongoose.connect(mongoURI, {
//         // useNewUrlParser: true,
//         // useUnifiedTopology: true 
//     });
//     console.log("mongo Connect")
// }
// module.exports=connectToMongo;       


const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI; // Load from .env file

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB Atlas");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectToMongo;

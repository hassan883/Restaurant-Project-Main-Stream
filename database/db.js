const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://hasssanjaved:HASSYjaved883@restaurant-project.g5ncuzi.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database Connected");
    } catch(err){
        console.log(err);
    }
}


module.exports = connectDB;

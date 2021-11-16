const mongoose= require("mongoose");
const {Schema} = mongoose;

const ContactSchema =new Schema({
    Name:String,
    LastName:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    PhoneNumber: {
        type:String,
        require:true,
    },
    Adresse:String
});

module.exports= Contact= mongoose.model("contact", ContactSchema)
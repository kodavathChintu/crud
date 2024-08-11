const mongoose=require('mongoose');
const alienSchema=new mongoose.Schema({
    name:{
        type:String,
        required:True
    },
    tech:{
        type:String,
        required:True
    },
    sub:{
        type:String,
        required:True
    }
})

module.exports=mongoose.model('Alien',alienSchema)
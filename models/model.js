const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        image:{
            type:String,
            required: true
        },
        phone:{
            type: String,
            required: true,
           
        },
        
        address:{
            type: String,
            required: true,
           
        },
        
        country:{
            type: String,
            required: true,
           
        },
        
        city:{
            type: String,
            required: true,
           
        },
        zip:{
            type: Int16Array,
            required: true,
           
        },


    }
)
const Users = mongoose.model('Users', UserSchema)
module.export = Users;
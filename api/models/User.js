import mongoose,{Schema} from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        LastName:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required:true
        },
        email:{
            type: String,
            required: true
        },
        profilePic:{
            type: String,
            required: false,
            default:"https://freesvg.org/img/abstract-user-flat-4.png"
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        roles:{
            type : [Schema.Types.ObjectId],
            required: true,
            ref:"Roles"
        }
    },
    {
        timestamps:true
    }
)
export default mongoose.model("Users",UserSchema)
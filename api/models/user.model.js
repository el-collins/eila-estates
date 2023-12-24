import mongoose from "mongoose";

// Db schema. Rules are schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
    },
}, {timestamps: true});


// model
const User = mongoose.model('User', userSchema);

export default User;
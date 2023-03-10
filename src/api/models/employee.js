import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
})

EmployeeSchema.methods.generateHash = function(password) {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(8), null)
}

EmployeeSchema.methods.validPassword = function(password) {
    return bcryptjs.compareSync(password, this.password)
}

var Employee = mongoose.model("Employee", EmployeeSchema)

export default {Employee, EmployeeSchema}
import mongoose from "mongoose";
import employee from "./employee.js";

var employeeSchema = employee.EmployeeSchema

const ReportSchema = new mongoose.Schema({
    employee: employeeSchema,
    days_worked: [
        {
            start: Date,
            end: Date
        }
    ],
})

var Report = mongoose.model('Report', ReportSchema)

export default Report
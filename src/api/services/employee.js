import Employee from "../models/employee.js"
import Report from "../models/report.js"

export async function login(user) {
    return await Employee.Employee.findOne({
        email: user.email
    })
    .then((usr) => {
        if (!usr.validPassword(user.password)) {
            console.log('Password didn\'t match')
        } else {
            console.log('Authenticated')
        }
    })
    .catch(err => {throw new Error(err)})
}

export async function save(user) {
    var new_user = new Employee.Employee({
        name: user.name,
        email: user.email
    })
    
    new_user.password = new_user.generateHash(user.password)
    
    return await new_user.save()
    .then(u => {
        var new_report = new Report({ employee: u })
        return new_report.save()
    })
    .catch(err => {throw new Error(err)})
}

export async function update(id, user) {
    var updated_user = await Employee.Employee.findByIdAndUpdate({ _id: id })
    updated_user.name = user.name
    updated_user.email = user.email
    updated_user.password = updated_user.generateHash(user.password)

    return await updated_user.save()
    .then(doc => {console.log('User updated')})
    .catch(err => {throw new Error(err)})
}

export async function remove(id) {
    return await Employee.Employee.findByIdAndDelete({ _id: id })
    .then(doc => {console.log('Deleted')})
    .catch(err => {throw new Error(err)})
}

import report from '../models/report.js'

export async function save(date) {
    let start = date.start
    let end = date.end
    console.log(start, end)
    return await report.updateOne({
        "employee._id": date.user_id
    }, 
    {
        $push: { 
            days_worked: {
                start: start,
                end: end
            }
        }
    })
    .then(console.log('Day added'))
    .catch(err => {throw new Error(err)})
}

export async function getReport(user_id) {
    return await report.find({
        "employee._id": user_id
    })
    .then(console.log('Returning reports'))
    .catch(err => {throw new Error(err)})
}

// export async function getDay(date) {
//     return await report.findOne({
//         days_worked: {start: date}
//     })
//     .then(console.log('Return day'))
//     .catch(err => {throw new Error(err)})
// }

export async function updateDay(user_id, start, end, new_start, new_end) {
    return await report.updateOne(
        {
            "employee._id": user_id,
            days_worked: {$elemMatch:{ start: start, end: end }}
        } ,
        {
            $set: {
                "days_worked.$": { start: new_start, end: new_end }
            }
        }
    )
    .then(console.log('Updating day'))
    .catch(err => {throw new Error(err)})
}

export async function deleteDay(date) {
    return report.updateOne(
        { "employee._id": date.user_id },
        {
            $pull: {
                days_worked: { start: date.start, end: date.end }
            }
        }
    )
    .then(console.log('Day deleted'))
    .catch(err => {throw new Error(err)})
}
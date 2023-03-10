import * as service from '../services/report.js'

export async function save(req, res) {
    try {
        let user_id = req.body.user_id
        let start = new Date(req.body.start)
        let end = new Date(req.body.end)
        const report = await service.save({ user_id, start, end })
        res.json(report)
    }
    catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

export async function deleteDay(req, res) {
    try {
        let user_id = req.body.user_id
        let start = new Date(req.body.start)
        let end = new Date(req.body.end)
        const report = await service.deleteDay({user_id, start, end})
        res.json(report)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

export async function getReport(req, res) {
    try {
        let user_id = req.body.user_id
        const report = await service.getReport(user_id)
        res.json(report)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

export async function update(req, res) {
    try {
        let user_id = req.body.user_id
        let start = new Date(req.body.start)
        let end = new Date(req.body.end)
        let new_start = new Date(req.body.new_start)
        let new_end = new Date(req.body.new_end)
        const report = service.updateDay(user_id, start, end, new_start, new_end)
        res.json(report)
    } catch (err) {
        res.status(500).send(err)
    }
}

import * as service from '../services/employee.js'

export async function login(req, res) {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await service.login({ email, password })
        res.json(user)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function save(req, res) {
    try {
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const user = await service.save({ name, email, password })
        res.json(user)
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}

export async function update(req, res) {
    try {
        const id = req.params.id
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const user = await service.update(id, ({name , email, password}))
        res.json(user)
    }
    catch (err) {
        console.error(err)
        res.status(500).send(err.message)
    }
}

export async function remove(req, res) {
    try {
        const id = req.params.id
        const user = await service.remove(id)
        res.json(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

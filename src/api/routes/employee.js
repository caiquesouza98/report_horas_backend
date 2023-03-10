import { Router } from 'express'
import * as controller from '../controllers/employee.js'
const employeeRouter = Router()

employeeRouter.post('/', controller.save)
employeeRouter.post('/auth', controller.login)
employeeRouter.delete('/:id', controller.remove)
employeeRouter.put('/:id', controller.update)

export default employeeRouter
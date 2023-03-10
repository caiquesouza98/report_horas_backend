import { Router } from 'express'
import * as controller from '../controllers/report.js'
const reportRouter = Router()

reportRouter.post('/', controller.save)
reportRouter.get('/', controller.getReport)
reportRouter.delete('/', controller.deleteDay)
reportRouter.put('/', controller.update)

export default reportRouter
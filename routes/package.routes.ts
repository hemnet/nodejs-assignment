import * as express from 'express'
import packageController from '../controllers/package.controller.ts'

const router = express.Router()

router.get('/', packageController.getAll)

export default router

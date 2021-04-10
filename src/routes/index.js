import { Router } from 'express'

import root from './root'
import api from './api'

const router = Router()

router.use(root)
router.use('/apipath', api)
//in api/index.js, the get request says it is root
//with this, it is basically appending /api to root and
//using the index.js file from api, as seen in import above

export default router
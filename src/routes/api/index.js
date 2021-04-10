import { Router } from 'express'
import logger from '../../helpers/logger'
import notes from './notes'
import test from './test'

const router = Router()

router.get('/', (req, res) => {
    logger.info('Inside the /api path')
    res.json({ msg: 'API Endpoint'})
})

router.use('/notespath', notes)
router.use('/test', test)
//just like in api/index.js, the router is using notes in the 
///notepath, and it is appending it to /. since it is being used
//as apipath in api/index.js, it is appended as 
// localhost:3000/apipath/notespath

export default router
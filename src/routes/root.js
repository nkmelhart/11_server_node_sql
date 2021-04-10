import { Router } from 'express'
import logger from '../helpers/logger'

const router = Router()

router.get('/', (req, res) => {
    logger.info('Inside the root path')
    //const title = process.eventNames.TITLE || 'Server'
    const title = 'Nolan Melhart API'
    res.send({ msg: title})
})

export default router
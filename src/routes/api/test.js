import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json( {msg: 'This is a test'})
})

export default router
import { Router } from 'express'

import * as db from '../../services/notes'
import logger from '../../helpers/logger'
import auth from '../../helpers/auth'

const router = Router()

router.use(auth.authenticate('local', {session: false}))

router.get('/', async (req, res) => {
    const notes = await db.getAll()
    res.send(notes)
})

router.post('/', async (req, res) => {
    const { notes: newNote } = req.body
    if (newNote && req.body.notes) {
        const note = await db.add(newNote)
        if (note.error) {
            res.status(400)
        }
        logger.info('inside router.post: ' + note)
        res.send(note)
    }
    else {
        res.send(400).send({msg: 'Bad status'})
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const note = await db.getById(id)
    if (note) {
        res.send(note)
    }
    else {
        logger.warn(`Note ${id} does not exist`)
        res.status(404).send({})
    }
})
//this above will be requested as /apipath/notespath/{whatever}

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { notes: updatedNote } = req.body
    const noteSend = await db.update(id, updatedNote)
    if (noteSend.error) {
        res.status(400)
    }
    res.send(noteSend)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    res.send( await db.remove(id) )
})

export default router
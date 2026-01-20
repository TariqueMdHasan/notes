const express = require('express')
const router = express.Router()
const middleProtect = require('../middlewares/authMiddleware.js')
const {writeNote, updateNote, getNote, deleteNote} = require('../controllers/diaryController.js')

router.post('/createDiary', middleProtect, writeNote)
router.put('/updateNote/:id', middleProtect, updateNote)
router.get('/getNotes', middleProtect, getNote)
router.delete('/delete/:id',middleProtect, deleteNote)


module.exports = router
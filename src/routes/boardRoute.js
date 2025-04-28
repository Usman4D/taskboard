const { Router } = require('express')
const { getBoard, createBoard, updateBoard, deleteBoard } = require('../controllers/boardController')

const router = Router()

// manage board
router.get('/board', getBoard)
router.post('/board', createBoard)
router.put('/board/:id', updateBoard)
router.delete('/board/:id', deleteBoard)

module.exports = router

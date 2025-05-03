const { Router } = require('express')
const { createTask, updateTask, deleteTask } = require('../controllers/taskController')

const router = Router()

router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

module.exports = router

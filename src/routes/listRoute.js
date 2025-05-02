const { Router } = require('express')
const { createList, updateList, deleteList } = require('../controllers/listController')

const router = Router()

router.post('/list', createList)
router.put('/list/:id', updateList)
router.delete('/list/:id', deleteList)

module.exports = router

const resposeStanderd = require('../helpers/response')
const { createTaskModel, updateTaskModel, deleteTaskModel } = require('../models/taskModel')

module.exports = {
	createTask: async (req, res) => {
		try {
			const { name, listID } = req.body
			const result = await createTaskModel(name, listID)

			if (result.affectedRows) {
				return resposeStanderd(res, 'Task has been added', 200, true, { data: req.body })
			}
			else {
				return resposeStanderd(res, 'Cannot add Task', 400, false)
			}
		}
		catch (error) {
			return resposeStanderd(res, 'Internal server error', 500, false, { error: error.message })
		}
	},
	updateTask: async (req, res) => {
		try {
			const { id } = req.params
			const { name } = req.body
			if (name) {
				const result = await updateTaskModel(id, name)
				if (result.affectedRows) {
					return resposeStanderd(res, 'Task has been updated')
				}
				else {
					return resposeStanderd(res, 'Cannot update Task', 400, false)
				}
			}
			else {
				return resposeStanderd(res, 'All fields must be filled', 400, false)
			}
		}
		catch (error) {
			return resposeStanderd(res, 'Internal server error', 500, false, { error: error.message })
		}
	},
	deleteTask: async (req, res) => {
		try {
			const { id } = req.params
			if (id) {
				const result = await deleteTaskModel(id)
				if (result.affectedRows) {
					return resposeStanderd(res, 'Task has been deleted')
				}
				else {
					return resposeStanderd(res, 'Cannot delete Task', 400, false)
				}
			}
			else {
				return resposeStanderd(res, 'All fields must be filled', 400, false)
			}
		}
		catch (error) {
			return resposeStanderd(res, 'Internal server error', 500, false, { error: error.message })
		}
	}
}

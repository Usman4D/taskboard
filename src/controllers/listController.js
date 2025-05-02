const resposeStanderd = require('../helpers/response')
const { createListModel, updateListModel, deleteListModel } = require('../models/listModel')

module.exports = {
	createList: async (req, res) => {
		try {
			const { name, boardID } = req.body
			const result = await createListModel(name, boardID)

			if (result.affectedRows) {
				return resposeStanderd(res, 'List has been added', 200, true, { data: req.body })
			}
			else {
				return resposeStanderd(res, 'Cannot add List', 400, false)
			}
		}
		catch (error) {
			return resposeStanderd(res, 'Internal server error', 500, false, { error: error.message })
		}
	},
	updateList: async (req, res) => {
		try {
			const { id } = req.params
			const { name } = req.body
			if (name) {
				const result = await updateListModel(id, name)
				if (result.affectedRows) {
					return resposeStanderd(res, 'List has been updated')
				}
				else {
					return resposeStanderd(res, 'Cannot update List', 400, false)
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
	deleteList: async (req, res) => {
		try {
			const { id } = req.params
			if (id) {
				const result = await deleteListModel(id)
				if (result.affectedRows) {
					return resposeStanderd(res, 'List has been deleted')
				}
				else {
					return resposeStanderd(res, 'Cannot delete List', 400, false)
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

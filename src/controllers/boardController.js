const responseStandard = require('../helpers/response')
const { getBoardModel, createBoardModel, updateBoardModel, deleteBoardModel, getBoardIDModel } = require('../models/boardModel')

module.exports = {
	getBoard: (req, res) => {
		res.send("get board")
	},
	createBoard: async (req, res) => {
		try {
			const { name } = req.body
			if (name) {
				const result = await createBoardModel(name)

				const data = {
					id: result.insertId,
					...req.body
				}

				return responseStandard(res, 'Board has been added', 200, true, {data} )
			}
			else {
				return responseStandard(res, 'All fields must be filled', 400, false)

			}
		} catch (error) {
			return responseStandard(res, 'Internal server error', 500, false, {error: error.message})
		}

	},
	updateBoard: async (req, res) => {
		try {
			const { id } = req.params
			const { name } = req.body
			if (name) {
				const result = await updateBoardModel(id, name)
				if (result.affectedRows){
					return responseStandard(res, 'Board has been updated')
				}
				else {
					return responseStandard(res, 'Cannot update Board', 400, false, {result: result})
				}
			}
			else {
				return responseStandard(res, 'All fields must be filled', 400, false)
			}
		}
		catch (error) {
			return responseStandard(res, 'Internal server error', 500, false, {error: error.message})
		}
	},
	deleteBoard: async (req, res) => {
		try {
			const { id } = req.params
			if (id) {
				const result = await getBoardIDModel(id)

				if (result.length) {
					const result = await deleteBoardModel(id)

					if (result.affectedRows) {
						return responseStandard(res, 'Board has been deleted')
					}
					else{
						return responseStandard(res, 'Cannot delete Board', 400, false)
					}
				}
				else {
					return responseStandard(res, 'Board not found', 404, false)
				}
			}
			else {
				return responseStandard(res, 'All fields must be filled', 400, false)
			}
		} catch (error) {
			return responseStandard(res, 'Internal server error', 500, false, {error: error.message})
		}
	}
}

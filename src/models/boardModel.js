const model = require('../helpers/model')
const table = 'board'

module.exports = {
	getBoardModel: () => {
		return `SELECT * FROM ${table}`
	},
	createBoardModel: (name) => {
		const query = `INSERT INTO ${table} (name) VALUES ('${name}')`
		return model(query)
	},
	updateBoardModel: (id, name) => {
		const query = `UPDATE ${table} SET name = '${name}' WHERE id = ${id}`
		return model(query)
	},
	deleteBoardModel: (id) => {
		const query = `DELETE FROM ${table} WHERE id = ${id}`
		return model(query)
	},
	getBoardIDModel: (id) => {
		const query = `SELECT * FROM ${table} WHERE id = ${id}`
		return model(query)
	}
}

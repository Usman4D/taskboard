const model = require('../helpers/model')
const table = 'list'
const table_join = 'board'

module.exports = {
	createListModel: (name, boardID) => {
		const query = `INSERT INTO ${table} (name, boardID) VALUES ('${name}', ${boardID})`
		return model(query)
	},
	updateListModel: (id, name) => {
		const query = `UPDATE ${table} SET name = '${name}' WHERE id = ${id}`
		return model(query)
	},
	deleteListModel: (id) => {
		const query = `DELETE FROM ${table} WHERE id = ${id}`
		return model(query)
	}
}

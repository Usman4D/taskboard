const model = require('../helpers/model')
const table = 'task'
const table_join = 'list'

module.exports = {
	createTaskModel: (name, listID) => {
		const query = `INSERT INTO ${table} (name, boardID) VALUES ('${name}', ${boardID})`
		return model(query)
	},
	updateTaskModel: (id, name) => {
		const query = `UPDATE ${table} SET name = '${name}' WHERE id = ${id}`
		return model(query)
	},
	deleteTaskModel: (id) => {
		const query = `DELETE FROM ${table} WHERE id = ${id}`
		return model(query)
	}
}

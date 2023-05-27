import { findAll, findOne } from "./database";

// class Database {
// 	static findAll() {
// 		throw new Error('findAll Not Implemented');
// 	}
// 	static findOne() {
// 		throw new Error('findOne Not Implemented');
// 	}
// }

function Database() {}

Database.prototype.findAll = findAll


Database.prototype.findOne = findOne

export default new Database();
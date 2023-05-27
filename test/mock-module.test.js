import { findAll } from "../src/database";
import userService from "../src/user.service";

/*
	========== Mock Module ==========

	Mock module berfungsi untuk meniru module-module
	baik module yang berasal dari aplikasi kita
	atau luar.

	Untuk mocking module kita menggunakan sintaks :

	jest.mock(modulenya);
*/

// Mocking databse module (mocking semua item yg ada di dalam database module)
// jest.mock('../src/database.js')

// Mocking sebagian item yg ada di database module
jest.mock('../src/database.js', () => {
	const originalModule = jest.requireActual('../src/database.js');

	return {
		__esModule: true,
		...originalModule,
		findAll: jest.fn(),
	}
});

test('test mock module', () => {

	findAll.mockImplementation(() => {
		return [
			{
				id: 1,
				name: 'Mathius'
			}
		]
	});

	expect(userService.findAll()).toEqual([
		{
			id: 1,
			name: 'Mathius'
		}
	])

	expect(userService.findOne()).toEqual([
		{
			id: 1,
			name: 'Mathius'
		}
	])
})
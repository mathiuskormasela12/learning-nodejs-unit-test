import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

/*
	========== Mock Partial Class ==========

	Untuk mock partial class atau hanya mocking
	beberapa method yg ada dalam sebuah class
	kita bisa menggunakan jest.spyOn(object class nya, 'method yang ingin di mock')
*/

const repo = new UserRepository();
const service = new UserService(repo);

const user = {
	id: 1,
	name: 'mathius'
};

test("mock partial class", () => {
	// Mocking method findAll nya UserRepository
	const findAllMock = jest.spyOn(repo, 'findAll');

	// Create mocking implementation
	findAllMock.mockImplementation((users) => {
		return users;
	});

	expect(service.findAll([user])).toEqual([user]);
	expect(repo.findAll).toHaveBeenCalled();
	expect(repo.findAll).toHaveBeenCalledTimes(1);
	expect(repo.findAll).toHaveBeenCalledWith([user]);

	expect(findAllMock).toHaveBeenCalled();
	expect(findAllMock).toHaveBeenCalledTimes(1);
	expect(findAllMock).toHaveBeenCalledWith([user]);
})
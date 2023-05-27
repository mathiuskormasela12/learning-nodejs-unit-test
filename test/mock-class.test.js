import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";
/*
	========== Mock Class ==========

	Untuk mock class sangat mudah cara nya
	persis sma dengan cara kita mock modules.
	Namun cara ini akan membuat semua method dalam class
	nya memnjadi mock function juga.
*/



// Mock module user repository
jest.mock("../src/user-repository.js");

// Karena diatas sudah jalanin jest.mock maka userRepository sudah di ubah menjadi mock object
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

const user = {
	id: 1,
	name: 'mathius'
};

test("test mock class findAll", () => {
	userRepository.findAll.mockReturnValue([user]);

	expect(userService.findAll([user])).toEqual([user]);
	expect(userRepository.findAll).toHaveBeenCalled();
	expect(userRepository.findAll).toHaveBeenCalledWith([user]);
})
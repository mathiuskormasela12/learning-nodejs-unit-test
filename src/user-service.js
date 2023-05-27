
export class UserService {
	constructor(userRepository) {
		this.userRepository = userRepository;
	}

	findAll(user) {
		return this.userRepository.findAll(user);
	}

	findOne(id) {
		return this.userRepository.findOne(id);
	}
}
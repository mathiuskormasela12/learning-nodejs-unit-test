import { register } from "../src/user";
/*
		========== Mock Function ==========

		Ketika menulis unit test terkadang
		kita akan kesulitan untuk testing function
		yang berasalah dari package atau system lain,
		Contoh nya function create dari database untuk insert
		data ke database. Nah untuk mengatasi hal tersebut
		kita bisa membuat mock function nya. Mock function
		disin maksudnya adalah function tiruan dari function aslinya.

		Sederhananya kita akan meniru function untuk insert
		data ke database. Nah utk melakukan itu kita bisa menggunkana
		fitur mock functionn jest. Untuk membuat mock function 
		di dalam jest, kitan bisa menggunakan jest.fn().
		module jest akan otomatis ada, jadi kita tidak perlu
		mengimport module nya. 
*/

it('should be return the user object', () => {
	const user = {
		username: 'admin',
		password: 'admin'
	};

	const create = jest.fn();

	// Mensimulasikan return value dari mock function create
	// create.mockReturnValue(user);
	create.mockReturnValueOnce(user);
	create.mockReturnValueOnce({ username: 'user', password: 'user' });

	expect(register(user, create)).toBe(user);
	expect(register({ username: 'user', password: 'user' }, create)).toEqual({ username: 'user', password: 'user' });

	// Check berapa kali mock function create di panggil
	expect(create.mock.calls.length).toBe(2);

	// Check parameter apa yg di kirim ke mock function create
	// Check Parameter pertama pada penmanggilan mock function pertama
	expect(create.mock.calls[0][0]).toEqual(user);
	// Check Parameter pertama pada penmanggilan mock function kedua
	expect(create.mock.calls[1][0]).toEqual({ username: 'user', password: 'user' });

	// Check return value mock function
	console.log('Return value pemanggilan pertama =>', create.mock.results[0].value);

});

// Mock Implementation
it('should be return a string password', () => {
	const create = jest.fn();
	// create.mockImplementation((data) => {
	// 	return data?.password ?? '';
	// });

	// Akan di pakai sekali ketika di panggil
	// jika di panggil kedua kalinya, maka akan di return undefined
	create.mockImplementationOnce((data) => {
		return data?.password ?? '';
	})

	expect(register({ name: 'mathius', password: 'mathius123' }, create)).toBe('mathius123');
});

// Async Function (Success)
it('should be return user data with promise success', async () => {
	const create = jest.fn();

	// Define resolve return value
	create.mockResolvedValue({
		username: 'admin',
		password: 'admin123'
	});

	await expect(register({ username: 'admin', password: 'admin123' }, create)).resolves.toEqual({
		username: 'admin',
		password: 'admin123'
	})
})

// Async Function (Failed)
it.failing('should be return user data with promise failed', async () => {
	const create = jest.fn();

	// Define reject return value
	create.mockRejectedValue('Failed to register');

	await expect(register({}, create)).rejects('Failed to register');
});

it('test mock matcher', () => {
	const create = jest.fn();
	create.mockImplementation((data) => {
		return data;
	})

	register({ username: 'mathius', password: '123' }, create)
	register({ username: 'mathius', password: '123' }, create)

	// Checking apakah mock function create pernah di panggil atau kgk
	expect(create).toHaveBeenCalled();

	// Checking apakah mock function create pernah di panggil 2 kali
	expect(create).toHaveBeenCalledTimes(2);

	// Checking apakah mock function create pernah di panggil dan mengirimkan  { username: 'mathius', password: '123' } sbg parameter
	expect(create).toHaveBeenCalledWith({ username: 'mathius', password: '123' });
})
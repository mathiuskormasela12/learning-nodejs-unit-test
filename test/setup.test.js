import {sum} from '../src/sum';

// beforeEach akan dijalankan sebelum sebuah test case di jalankan
// Jadi jika dalam satu file terdapat 2 test case, maka beforeEach akan dijalankan 2 kali
beforeEach(() => {
	console.log("Run Before Each");
});

// afterEach akan dijalankan setelah sebuah test case di jalankan
// Jadi jika dalam satu file terdapat 2 test case, maka beforeEach akan dijalankan 2 kali
afterEach(() => {
	console.log("Run After Each");
});

// beforeAll akan dijalankan sekali ketika sebuah test case belum di jalankan dlam satu file
// jdi jika ada 2 test case dalam satu file, maka beforeAll ini akan dijalankan tetap 1 kali
beforeAll(() => {
	console.log("Run Before All");
});

// afterAll akan dijalankan sekali ketika sebuah test case telah di jalankan dlam satu file
// jdi jika ada 2 test case dalam satu file, maka beforeAll ini akan dijalankan tetap 1 kali
afterAll(() => {
	console.log("Run After All");
});

// Di dalam setup function, boleh menggunakan async await juga

test("test setup 1", () => {
	const result = sum(10, 30);
	console.log("Test case 1");
	expect(result).toBe(result);
});


test("test setup 2", () => {
	const result = sum(10, 30);
	console.log("Test case 2");
	expect(result).toBe(result);
});
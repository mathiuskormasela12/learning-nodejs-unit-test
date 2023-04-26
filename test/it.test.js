import {sum} from '../src/sum';
/*
	========= Belajar Function It =========

	Function it() memeiliki fungsi yg sama dengan
	function test(), namun biasnaya developer menggunakan
	funbction it() agar bisa lebih mudah dalam menulis unit test
	seperti menulis sebuah cerita. Jadi pada initnya
	function it() dan test() sama aja. Cuman function it()
	digunakan hanya biar lebih mudah di baca.
*/

/*
	========= Belajar Skip Function =========

	skip() function berguna untuk menskip sebuah test case.
*/

describe("When calls sum() function and passing 10 & 20 as the parameters", () => {
	// test("should return 30", () => {
	// 	const result = sum(10, 20);
	// 	expect(result).toBe(30);
	// });

	it("should return 30", () => {
		const result = sum(10, 20);
		expect(result).toBe(30);
	});

	// Test case ini akan di skip
	it.skip("should return 40", () => {
		const result = sum(20, 20);
		expect(result).toBe(40);
	});

	// Test case ini akan di skip
	test.skip("should return 50", () => {
		const result = sum(30, 20);
		expect(result).toBe(50);
	});
})
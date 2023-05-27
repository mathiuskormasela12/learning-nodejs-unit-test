import {sum} from '../src/sum'
/*
	========== Failing Method ==========

	Failing method berfungsi untuk mendefinisikan
	function yang akan di test haruslah menghasikan
	result yang salah. Jika menghasilkan result yg salah
	maka failing method akan success, jika result nya benar
	maka failing method akan failed. 
*/

// Sum harus return result yang benar
it('shoud return 4', () => {
	expect(sum(2, 2)).toBe(4);
});

// Sum harus return result yang salah
// Jadi jika kita ingin menulis test case yang harus gagal, maka hrus menggunakna failing method
it.failing('should be failed', () => {
	expect(sum(2, 2)).toBe(3);
})
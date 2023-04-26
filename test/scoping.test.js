
test("test scope outer", () => {
	console.log("Test Scope 1 Outer");
});

/*
	========== Scoping ==========

	Scoping merupakan cara untuk kita
	mengelompokan test function atau test case yg ada.
	Untuk melakukan scoping, kita bisa menggunakan
	function describe. Setiap setup function yg ditulis
	di dalam describe functoin maka hanya akan berhubungan
	dengan test function yg di dalam describe function tersebut.
	Scoping ini juga memungkinkan kita untuk membuat nested describe.
*/

describe("scope 1", () => {
	// Setup functoin ini hanya akan di jaklankan seblm test scope 1 di jalankan
	// Setup function ini tidak adakn di jalankna sebelum Test Scope 1 Outer di jalankan, karena beda scope
	// Namun jika kita menulis setup function di luar function describe, maka setup functionnya akan berhubungan dengan semua test function yg ada di dalam file tersebut.
	beforeEach(() => {
		console.log("Before Each scope 1");
	})

	test("test scope 1", () => {
		console.log("Test Scope 1");
	});
});
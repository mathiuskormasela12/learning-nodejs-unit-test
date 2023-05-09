
/*
	========== Belajar Only Function ==========

	Only function berguna untuk membuat sebuah test case
	menjadi satu-satunya test case yg akan di jalankan
	di file tertentu.
*/
// Test dibawah akan di jalankan
test.only("test ichi", () => console.log("First Tesuto"));
// Test dibawah ini tidak akan di jalankna karena ada test case di file ini yg menggunakan function only
test("test ni", () => console.log("Second Tesuto"));
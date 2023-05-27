import { callAsynFunc } from "../src/async";

/*
	========== Concurrent ==========
	
	Concurrent merupakah sebuah method yang berguna
	untuk menjalankan beberapa unit test secara
	bersamaan atau pararel. Karena secara default
	jika ada dua unit test, maka test-test tersebut
	akan dijalankan satu persatu.

	Kita juga dapat menentukan maksimal total
	concurrent method nya ada berapa dengan menambahkan
	object maxConcurrency: true di config jestnya.
	Default nya adalah 5.

	Jika kita set menjadi 2 maka, maka jika ada 4 concurrent method
	maka akan di pecah menjadi 2 bagian. Masing-masing satu bagian memiliki 2 function.
	Jadi unit test yg pertama dan kedua akan di jalankan secara pararel. Setelah itu,
	jest akan menunggu bagian pertama selesai, setelah selesai maka jest
	akan menjalankan test bagian kedua secara pararel.

	Configuration :
	Untuk membuat jest hanya bisa menjalankna  5 concurrent method
	maxConcurrency: 5

	Jadi jika ada 4 concurrent dan maxConcurrency nya adalah 2, akan di pecah jdj seperti ini :

	DI jalankan secara pararel
	test case 1 ()
	test case 2 ()

	Setelah test case 1 dan 2 selesai, baru jalankan test selanjut nya secara pararel lgi
	test case 3 ()
	test case 4 ()
*/

test.concurrent("callAsynFunc('Yerin') should return I love you Yerin", async () => {
	await expect(callAsynFunc('Yerin')).resolves.toBe('I love you Yerin')
});

test.concurrent("callAsynFunc('Eunha') should return I love you Eunha", async () => {
	await expect(callAsynFunc('Eunha')).resolves.toBe('I love you Eunha')
});

test.concurrent("callAsynFunc('Yuju') should return I love you Yuju", async () => {
	await expect(callAsynFunc('Yuju')).resolves.toBe('I love you Yuju')
});

test.concurrent("callAsynFunc('Sowon') should return I love you Sowon", async () => {
	await expect(callAsynFunc('Sowon')).resolves.toBe('I love you Sowon')
});
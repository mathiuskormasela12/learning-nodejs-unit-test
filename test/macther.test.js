import { MyException, callMe } from "../src/exception";

/*
	========== Matcher ==========

	Matcher merupakan kumpulan function-function
	dapat kita gunakan untuk mendefinisikan sebuah
	result dari code kita dan membandingkannya dengan
	result yg kita harapkan.

	Misal kita memiliki sebuah function yg akan melakukan
	perkalian. Dengan Matcher ini, kita bisa test function tersebut
	dengan cara mendefinisikan value yg di harapkan akan di return
	oleh function tersebut.

	Contoh matcher itu adalah :
	1. expect(result).toBe(expected result)
	   .toBe() berguna untuk mengecek expected result yang berupa
		 tipe data primitif, seperti string, number & boolean.
	2. expect(result).toEqual()
		 .toEqual() berguna untuk mengecek expected result yang berupa
		 non primitif tipe data, yaitu object & array.

*/
test("test toBe", () => {
	const name = "Eunha";
	const result = `I Love You ${name}`;

	expect(result).toBe("I Love You Yerin");
})

test("test toEqual", () => {
	// const mhs = {
	// 	nama: "Mathius",
	// 	usia: 21
	// };

	// const result = {
	// 	nama: "Mathius",
	// 	usia: 21
	// };

	const mhs = [1, 2];
	const result = [1, 2];

	expect(result).toEqual(mhs);
});

/* Truthiness Matcher */
test("test Truthiness", () => {
	let value = null;

	// Untuk Mengecek jika resultnya itu null
	expect(value).toBeNull();
	// Untuk mengecek jika resultnya itu akan selalu di anggap false oleh if statement
	// Jadi untuk tipe data null & unedefined akan selalu di anggap falsy
	expect(value).toBeFalsy();
	// Untuk mengecek jika resultnya itu tipe data selain undefined.
	expect(value).toBeDefined();

	value = undefined;

	// Untuk mengecek jika result nya itu undefined
	expect(value).toBeUndefined();
	// Untuk mengecek jika resultnya itu akan selalu di anggap false oleh if statement
	// Jadi untuk tipe data null & unedefined akan selalu di anggap falsy
	expect(value).toBeFalsy();

	value = 'Mathius';

	// Untuk mengecek jika resultnya itu akan selalu di anggap true oleh if statement
	// Jadi untuk semua tipe data selain null & undefined
	expect(value).toBeTruthy();
	// Untuk membandingkan biasa
	expect(value).toBe('Mathius');
});

/* Number Matcher */
test("test number", () => {
	const act = 2 * 4;

	// Untuk mengecek jika resultnya lebih besar dari 5
	expect(act).toBeGreaterThan(5);
	// Untuk mengecek jika resultnya lebih besar atau sama dengan 8
	expect(act).toBeGreaterThanOrEqual(8);
	// Untuk mengecek jika resultnya lebih kecil dari 10
	expect(act).toBeLessThan(10);
	// Untuk mengecek jika resultnya lebih kecil atau sama dengan 8
	expect(act).toBeLessThanOrEqual(8);
});

/* String Matcher */
test("test string", () => {
	const sentence = "Sarangahe Yerin";

	// Untuk mengecek result dari string
	expect(sentence).toBe("Sarangahe Yerin");
	// Untuk mengecek result string dengan regex
	expect(sentence).toMatch(/yerin$/i);
});

/* Array Matcher */
test("test array of string or number or boolean", () => {
	const names = ["Eunha", "Sin B", "Umji", true,  2015];

	// Untuk mengecek jika result nya normal array, seperti array of string / array of number / array of boolan
	expect(names).toContain("Sin B");
});

test("test array of object or nested array matcher", () => {
	const grups = [
		{
			name: "Kim Sojung",
			year: 1995
		},
		{
			name: "Jung Yerin",
			year: 1996
		},
	];

	// Untuk mengecek jika resultnya array of object atau nested array
	expect(grups).toContainEqual({
		name: "Kim Sojung",
		year: 1995
	});
});

/* Not Matcher */
test("test not matcher", () => {
	const value = 85;

	// Untuk melakukan negasi dari setiap matcher
	// Setiap matcher yg sudah di pekajari di atas support untuk not matcher ini.
	expect(value).not.toBeGreaterThan(80);
});

/* Exception Matcher */
test("test exception matcher", () => {
	// Test nya akan success jika function callMe return error apapun
	expect(() => callMe("Mathius")).toThrow();
	// Test nya akan success jika callMe return error menggunakan instance MyException, jika menggunakna instance lain, maka test akan failed
	expect(() => callMe("Mathius")).toThrow(MyException);
	// Test nya akn success jika callMe return error string menggunakan test "Ups something went wrong", jika bukan teks "Ups something went wrong", maka akan test akan failed
	// Tetapi jika return error nya itu teks "Ups something went wrong !" atau "Ups something went wrong ?" maka akan sukses test nya
	// Karena yg penting di string error nya harus ada teks yg di passing sbg paramteer dari toThrow function yaitu teks "Ups something went wrong"
	expect(() => callMe("Mathius")).toThrow("Ups something went wrong");

	expect(callMe()).toBe("Aman");

	/*
		========== Code Coverage  ==========

		Code Coverage merupakan sebuah fitur dalam Jest
		yg berguna untuk mengetahui apakah setiap baris kode-kode,
		function, branche (logica if-else) sudah tercover atau belum.
		Apakah skenario-skenario nya sudah terpenuhi. Ini adalah best practice
		untuk menerapkan code coverage. Biasnaya di perushaan besar akan menaruh code coveragenya
		berada 70%-90%.

		Secara defaut, Jest akan menonaktifkan code coverage. Oleh sebab
		itu kita hahurs mengaktifknanya dengan cara menambahkan 
		collectCoverage: true kedalam jest config nya.
		Ketika menajalankan code coverage, Jest akan membuatkan sebuah folder baru
		bernama coverage yg berisi file-file html yang dapat kita buka dan disana
		akan di tampikan code coverage dari unit test kita. Perlu di ingat, folder coverage ini
		hrus di ignore ketika kita menggunakan git.

		Secara ummum ketika menjalankan code coverage, maka Jest akan menampilkan
		data-data beretikut :
		a. Statements (percentage)
		   Untuk mendefinisikan persentase dari setiap statement-statement yg sudah tercover unit test
		b. Branch 
		   Untuk mendefinisikan persentase dari setiap kondisi if-else yg sudah tercover unit test
		c. Funcs
		   Untuk mendefinisikan persentase dari setiap function-function yg sudah tercover unit test
		d. Lines
		   Untuk mendefinisikan persentase dari setiap baris-baris yg sudah tercover unit test
		e. Uncovered Lines
	    Untuk mendefinisikan persentase dari setiap baris-baris yg blm tercover unit test

			Dibawah ini berguna untuk membuat Jest otomatis error, ketika code coverage nya tidak sesuai deng apa yg kita harapkan
		  coverageThreshold: {
				global: {
					branches: 100,
					functions: 100,
					lines: 100,
					statements: 100
				}
			},
	*/
});
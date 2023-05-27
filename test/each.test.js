import { sum } from "../src/sum";
/*
	========== Each Function ==========

	Each function adalah sebuah method dalam jest
	untuk melooping sebuah unit test dengan menggunakan
	parameter dan expected result yang berbeda.

	Contoh penggunaanya adalah, misalkan kita
	akan mengetest sebuah sum function, namun kita
	akan mengetestnya 2 kali. test yang pertama
	paameter nya adalah 2 + 2 dimana resultnya harus lah empat.
	Test yg kedua parameter nya adalah 5 + 2 dimana
	result nya harus lah 7. Biasnaya kita akan menulis
	unit test nya 2 kali, namun ini adalah bad practice.
	Oleh sebab itu, kita harus menggunakan each method/function 
*/

// Cara Normal (Brad Practice) => kita kan menduplicate unit test nya
// test("sum(2, 2) should return 4", () => {
// 	expect(sum(2, 2)).toBe(4);
// });

// test("sum(5, 2) should return 7", () => {
// 	expect(sum(5, 2)).toBe(7);
// });

// Good Practice menggunakna each method (Bentuk Array)
// Terkadang akan sulit dilakukan karena bentuk nya array
// const table = [
// 	[
// 		2,
// 		2,
// 		4
// 	],
// 	[
// 		5,
// 		2,
// 		7
// 	]
// ];

// test.each(table)('sum(%s, %s) should return %s', (x, y, result) => {
// 	expect(sum(x, y)).toBe(result);
// })

// Good Practice menggunakna each method (Bentuk Object)
// Lebih mudah di lakukan dari bentuk pada yg bentuk datanya array (prefer gunakan option ini)
const data = [
	{
		x: 2,
		y: 2,
		result: 4
	},
	{
		x: 5,
		y: 2,
		result: 7
	}
]
test.each(data)('sum($x, $y) should return $result', ({ x, y, result }) => {
	expect(sum(x, y)).toBe(result)
})
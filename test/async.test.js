import {callAsynFunc} from '../src/async';

/*
	========== Async Function ==========

	Untuk memanggil async function di Jest cukup mudah.
	Kita hanya perlu menuliskan keyword di "async" di callback functoin nya.
	Dan menulis await di asinkronus function nya.
*/
test("test async function", async () => {
	const result = await callAsynFunc("Yerin");

	expect(result).toBe("I love you Yerin");
});

test("test async function 2", async () => {
	// Untuk mendefinisikan resolve asynch function
	await expect(callAsynFunc("Yerin")).resolves.toBe("I love you Yerin");
	// Untuk mendefinisikann rejected async function
	await expect(callAsynFunc()).rejects.toThrow("The name is empty");
});
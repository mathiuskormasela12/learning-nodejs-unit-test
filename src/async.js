export const callAsynFunc = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(name) {
				resolve(`I love you ${name}`);
			} else {
				reject(new Error("The name is empty"));
			}
		}, 1000);
	});
}
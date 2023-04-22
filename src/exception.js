export class MyException extends Error {}

export const callMe = (name) => {
	switch(name) {
		case 'Mathius' :
			throw new MyException("Ups something went wrong");

		default:
			return 'Aman';
	}
}
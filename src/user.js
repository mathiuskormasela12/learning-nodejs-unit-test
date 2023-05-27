
export const register = (data, create) => {
	if(data?.username || data?.password) {
		return create(data);
	} else {
		throw new Error('Failed to register');
	}
}

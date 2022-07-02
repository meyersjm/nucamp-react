export const validateUserLoginForm = ({ username, password }) => {
	const _Errors = new Object;

	if(!username) _Errors.username = 'Required';
	else if(username.length < 6) _Errors.username = 'Username must be at least 6 characters';
	else if(username.length > 15) _Errors.username = 'Username must be no more than 15 characters';

	if(!password) _Errors.password = 'Required';
	else if(password.length < 8) _Errors.password = 'Password must be at least 8 characters';

	return _Errors;
}

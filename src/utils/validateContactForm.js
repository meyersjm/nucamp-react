export const validateContactForm = ({ firstName, lastName, phoneNum, email }) => {
	const errors = new Object;
	const phoneVal = /^[0-9() +-]+$/;

	if(!firstName)
		errors.firstName = 'Required';
	else if(firstName.length < 2)
		errors.firstName = 'Must be at least 2 characters';
	else if(firstName.length > 15)
		errors.firstName = 'Must be 15 characters or less';

	if(!lastName)
		errors.lastName = 'Required';
	else if(lastName.length < 2)
		errors.lastName = 'Must be at least 2 characters';
	else if(lastName.length > 15)
		errors.lastName = 'Must be 15 characters or less';

	if(!phoneVal.test(phoneNum))
		errors.phoneNum = 'The phone number should contain only numbers, +, (, ), -, or spaces';

	if(!email.includes('@'))
		errors.email = 'Email should contain @';

	return errors;
};

import { Button,
	Label,
	Col,
	FormGroup } from 'reactstrap';
import { Formik,
	Field,
	ErrorMessage,
	Form } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

const ContactForm = _ => {
	const handleSubmit = (values, { resetForm}) => {
		console.log('Form values:', values);
		console.log('Form values in JSON:', JSON.stringify(values));
		resetForm();
	};

	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				phoneNum: '',
				email: '',
				agree: false,
				contactType: 'By Phone',
				feedback: ''
			}}
			onSubmit={handleSubmit}
			validate={validateContactForm}
		>
			<Form>
				<FormGroup row>
					<Label htmlFor='firstName' md='2'>
						First Name
					</Label>
					<Col md='10'>
						<Field className='form-control' name='firstName' placeholder='First Name' />
						<ErrorMessage name='firstName'>
							{(msg) => <p className='text-danger'>{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='lastName' md='2'>
						Last Name
					</Label>
					<Col md='10'>
						<Field className='form-control' name='lastName' placeholder='Last Name' />
						<ErrorMessage name='lastName'>
							{(msg) => <p className='text-danger'>{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='phoneNum' md='2'>
						Phone
					</Label>
					<Col md='10'>
						<Field className='form-control' name='phoneNum' placeholder="+1 (xxx) xxx-xxxx" />
						<ErrorMessage name='phoneNum'>
							{(msg) => <p className='text-danger'>{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='email' md='2'>
						Email
					</Label>
					<Col md='10'>
						<Field className='form-control' name="email" placeholder="user@host.tld" />
						<ErrorMessage name='email'>
							{(msg) => <p className='text-danger'>{msg}</p>}
						</ErrorMessage>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label check md={{ size: 4, offset: 2 }}>
						May we contact you?
					</Label>
					<Col md='4'>
						<Field className='form-control' name='contactType' as='select'>
							<option>By Phone</option>
							<option>By Email</option>
						</Field>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='feedback' md='2'>
						Your Feedback
					</Label>
					<Col md='10'>
						<Field className='form-control' name='feedback' as='textarea' rows='12' />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Col md={{ size: 10, offset: 2 }}>
						<Button type='submit' color='primary'>
							Send Feedback
						</Button>
					</Col>
				</FormGroup>
			</Form>
		</Formik>
	);
};

export default ContactForm;

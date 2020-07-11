import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Label,
	Input,
	Button,
	Form,
	FormGroup,
	FormFeedback
} from 'reactstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			username: {
				valid: false,
				invalid: false,
				spaces: false
			},
			email: {
				valid: false,
				invalid: false
			},
			password: {
				valid: false,
				invalid: false
			},
			verify: {
				valid: false,
				invalid: false,
				unmatched: false
			}
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		console.log(form);
		form.reset();
		this.setState({
			username: {
				valid: false,
				invalid: false,
				spaces: false
			},
			email: {
				valid: false,
				invalid: false
			},
			password: {
				valid: false,
				invalid: false
			},
			verify: {
				valid: false,
				invalid: false,
				unmatched: false
			}
		});
	}

	handleChange(event) {
		event.preventDefault();
		if (event.target.value.length === 0) {
			switch (event.target.name) {
				case 'username':
					this.setState({
						[event.target.name]: {
							valid: false,
							invalid: true,
							spaces: false
						}
					});
					break;
				case 'verify':
					let password = document.querySelector('#password').value;
					if (event.target.value !== password) {
						this.setState({
							[event.target.name]: {
								valid: false,
								invalid: true,
								unmatched: true
							}
						});
					} else {
						this.setState({
							[event.target.name]: {
								valid: false,
								invalid: true,
								unmatched: false
							}
						});
					}
					break;
				default:
					this.setState({
						[event.target.name]: {
							valid: false,
							invalid: true
						}
					});
			}
		} else {
			switch (event.target.name) {
				case 'username':
					if (/\s/.test(event.target.value)) {
						this.setState({
							[event.target.name]: {
								valid: false,
								invalid: true,
								spaces: true
							}
						});
					} else {
						this.setState({
							[event.target.name]: {
								valid: true,
								invalid: false,
								spaces: false
							}
						});
					}
					break;
				case 'password':
					this.setState({
						[event.target.name]: {
							valid: true,
							invalid: false
						}
					});
					let verify = document.querySelector('#verify').value;
					if (verify !== event.target.value) {
						this.setState({
							verify: {
								valid: false,
								invalid: true,
								unmatched: true
							}
						});
					} else {
						this.setState({
							verify: {
								valid: true,
								invalid: false,
								unmatched: false
							}
						});
					}
					break;
				case 'verify':
					let password = document.querySelector('#password').value;
					if (event.target.value !== password) {
						this.setState({
							[event.target.name]: {
								valid: false,
								invalid: true,
								unmatched: true
							}
						});
					} else {
						this.setState({
							[event.target.name]: {
								valid: true,
								invalid: false,
								unmatched: false
							}
						});
					}
					break;
				default:
					this.setState({
						[event.target.name]: {
							valid: true,
							invalid: false
						}
					});
			}
		}
	}

	render() {
		const inputStyle = {
			backgroundColor: '#2E4053',
			color: '#FFFFFF',
			fontWeight: 'bold',
			border: '1px solid #1069D9'
		};

		return (
			<Container className="App-header text-center" fluid>
				<h1>Form Validation Example Signup</h1>
				<hr className="w-100" />
				<Form className="mt-3 w-100" onSubmit={this.handleSubmit}>
					<Container className="w-25">
						<FormGroup>
							<Label htmlFor="username">Username:</Label>
							<Input
								name="username"
								style={inputStyle}
								valid={this.state.username.valid}
								invalid={this.state.username.invalid}
								onChange={this.handleChange}
							/>
							<FormFeedback invalid={this.state.username.invalid.toString()}>
								required
							</FormFeedback>
							<FormFeedback invalid={this.state.username.spaces.toString()}>
								username may not contain any empty spaces
							</FormFeedback>
							<FormFeedback valid={this.state.username.valid.toString()}>
								Great!
							</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="email">Email:</Label>
							<Input
								name="email"
								type="email"
								style={inputStyle}
								valid={this.state.email.valid}
								invalid={this.state.email.invalid}
								onChange={this.handleChange}
							/>
							<FormFeedback invalid={this.state.email.invalid.toString()}>
								required
							</FormFeedback>
							<FormFeedback valid={this.state.email.valid.toString()}>
								Great!
							</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="password">Password:</Label>
							<Input
								name="password"
								type="password"
								id="password"
								style={inputStyle}
								valid={this.state.password.valid}
								invalid={this.state.password.invalid}
								onChange={this.handleChange}
							/>
							<FormFeedback invalid={this.state.password.invalid.toString()}>
								required
							</FormFeedback>
							<FormFeedback valid={this.state.password.valid.toString()}>
								Great!
							</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="verify">Verify Password:</Label>
							<Input
								name="verify"
								type="password"
								id="verify"
								style={inputStyle}
								valid={this.state.verify.valid}
								invalid={this.state.verify.invalid}
								onChange={this.handleChange}
							/>
							<FormFeedback invalid={this.state.verify.invalid.toString()}>
								required
							</FormFeedback>
							<FormFeedback invalid={this.state.verify.unmatched.toString()}>
								passwords must match
							</FormFeedback>
							<FormFeedback valid={this.state.verify.valid.toString()}>
								Great!
							</FormFeedback>
						</FormGroup>
					</Container>
					<Button color="primary" size="lg" className="mt-3 w-25">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default App;

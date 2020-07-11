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
		this.state = {};
	}

	handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		console.log(form);
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
				<Form className="mt-3" onSubmit={this.handleSubmit}>
					<Container>
						<FormGroup>
							<Label htmlFor="username">Username:</Label>
							<Input
								name="username"
								style={inputStyle}
								valid={false}
								invalid={false}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="email">Email:</Label>
							<Input
								name="email"
								style={inputStyle}
								valid={false}
								invalid={false}
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="password">Password:</Label>
							<Input
								name="password"
								type="password"
								style={inputStyle}
								valid={false}
								invalid={false}
							/>
							<FormFeedback invalid>minimum 8 characters</FormFeedback>
						</FormGroup>
					</Container>
					<Button color="primary" size="lg" className="mt-3 w-75">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default App;

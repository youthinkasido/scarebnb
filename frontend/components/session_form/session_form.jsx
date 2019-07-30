import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    //handleDemoLogin 


    //render errors by iterating over errors array
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    renderFields() {
        return (
            

            
            <div>
                <div className="icon-wrap">
                <i className="fas fa-users icon-wrap-child"></i>
                <input type="text"
                
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={this.update('first_name')}
                    className="login-input"
          
                    />
                </div>
  
                <input type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.update('last_name')}
                    className="login-input"
                />
            </div>
        )
    }

    render() {
        return (
            <div className="login-form-container login-form-heading">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-heading">
                        Welcome to ScareBnB!
            <br />
                        Please {this.props.formType} or {this.props.navLink}
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />

                        <input type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />


                        {this.props.formType === 'signup' ? this.renderFields() : ''}


                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />

                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

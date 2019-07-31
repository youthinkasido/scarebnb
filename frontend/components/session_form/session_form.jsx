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
//state.ui.modal points to null or 'signup' or 'login'
  

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        const user = Object.assign({}, this.state);

        this.props.processForm(user).then( () =>{
            const that = this
            console.log(this)
            
            this.props.history.push('/search');
            this.props.closeModal()

            console.log('hello')}, (error)=>{
                console.log(error)
          })
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
        const { formType, openModal, oppositeFormType, formMessage, formTitle } = this.props;
        return (
            

            
            <div>  
                <div className="icon-wrap">
                <i className="fas fa-users icon-wrap-child"></i>
                  
                <input type="text"
                    
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.update('first_name')}
                    className="login-input"
          
                    />
                </div>
  
                <input type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.update('last_name')}
                    className=" login-form"
                />
            </div>
        )
    }

    render() {
        const {formType,openModal,oppositeFormType, formMessage, formTitle,closeModal} = this.props;
        return (
           
            <div className="login-form-container login-form-title">
               
                <form onSubmit={this.handleSubmit} className="login-form-box">
                        <button className="form-exit-button" type="button" onClick={closeModal} >X</button>
                    <label className='login-form-heading'>{formTitle}</label>
                    <div className="login-form-heading">
                        
           
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

                     
                        {formType === 'signup' ? this.renderFields() : ''}


                        <input type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />

                        <br />
                        <input className="session-submit" type="submit" value={formType} />
                        <br />
                        <div className="session-help">{formMessage} 
                            <button className="alt-form-link" onClick={() => openModal(oppositeFormType)}>&nbsp;&nbsp;{oppositeFormType}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SessionForm);

import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions'


const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formTitle: 'Sign up now',
        formType: 'signup',
        oppositeFormType: 'login',
        formMessage: `Don't have an account?`
       
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType) => dispatch(openModal(formType))

            
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

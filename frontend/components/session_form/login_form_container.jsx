import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
   
        formTitle: 'Login to continue',
        formType: 'login',
        oppositeFormType: 'signup',
        formMessage: 'Already have an account?'
    
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        closeModal: () => dispatch(closeModal()),
        openModal: (formType) => dispatch(openModal(formType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

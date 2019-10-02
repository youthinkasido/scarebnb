import { connect } from 'react-redux';
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
        openModal: (formType) => dispatch(openModal(formType)),
           demoLogin: (user) => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

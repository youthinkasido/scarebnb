import React from 'react';
import { Provider } from 'react-redux';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import splashPage from './session_form/splash.jsx';
import SearchContainer from './search/search_container'
import GreetingContainer from './greeting/greeting_container';
// import background from '../images/haunted-savannah-skyline.jpg';
import Modal from './modal/modal'
require("history").createBrowserHistory
// console.log(background)
// const history = createBrowserHistory()

const App = () => (
    <div>

       
           
 
    <Modal />
    
        {/* <Modal/> */}
        {/* <GreetingContainer /> */}
   <Switch >
<ProtectedRoute exact path="/search" component={SearchContainer} />
<AuthRoute exact path="/login" component={LogInFormContainer}/>
<AuthRoute exact path="/signup" component={SignUpFormContainer}/>
 <Route exact path="/" component={GreetingContainer} />
        </Switch>
    </div>



)


export default App
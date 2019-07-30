import React from 'react';
import { Provider } from 'react-redux';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import splashPage from './session_form/splash.jsx';
import SearchContainer from './search/search_container'
// import background from '../images/haunted-savannah-skyline.jpg';

// console.log(background)

const App = () => (

    
    <div>
        
   <Switch>
{/* <AuthRoute exact path="/" component={splashPage} /> */}
<AuthRoute exact path="/login" component={LogInFormContainer}/>
<AuthRoute exact path="/signup" component={SignUpFormContainer}/>
<Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>



)


export default App
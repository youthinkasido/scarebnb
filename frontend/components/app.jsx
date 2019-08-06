



import React from 'react';

import { Provider } from 'react-redux';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import splashPage from './session_form/splash.jsx';
import SearchContainer from './search/search_container'
import GreetingContainer from './greeting/greeting_container';
import SpotIndexContainer from './spots/spot_index_container'
import SpotShow from './spots/spot_show'
import Modal from './modal/modal'
import Map from './map';
import { withRouter } from 'react-router-dom'



require("history").createBrowserHistory



const App = () => {
 
  // // this.props.history.location.pathname
  // debugger
return(

  
  <div>
    <GreetingContainer />
    {/* <div className="splash-page-search">
      <h1>Find a host with a ghost...</h1> */}
      <SearchContainer />
    {/* </div> */}
 
   
    <div className='nav-line-top'></div>
     <div className='nav-line-bottom'></div>
    <div className="background-img" ></div>
   
    <Switch>
  
      {/* <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
      
      <Route exact path="/spots" component={SpotIndexContainer} />
      <Route exact path='/spots/:spotId' component={SpotShow} />
      {/* <Route exact path='/map' component={Map}/> */}
     
    </Switch>
    <Modal />


  </div>
)}


export default withRouter(App)
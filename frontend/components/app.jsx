



import React from 'react';

import { Provider } from 'react-redux';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
import SpotShowContainer from './spots/spot_show_container'
require("history").createBrowserHistory
import 'react-dates/lib/css/_datepicker.css';
import UserProfileContainer from './spots/user_profile_container';
import {ProtectedRoute} from '../util/route_util'

const App = () => {

return(

  <section>



    {window.location.href === `http://localhost:3000/#/` ? 
     
      <div className="splash-page-search">
       <section className="splash-name">ScareBnb</section>
      <img className="air-bnb-front-logo" src="./airbnb.svg" alt="" />
        <SearchContainer /></div>
      
      : <SearchContainer />}

    
    <GreetingContainer />

  

    <div className='nav-line-top'></div>
     <div className='nav-line-bottom'></div>
    <div className="background-img" ></div>

    <Switch>
      <Route exact path="/spots" component={SpotIndexContainer} />
      <Route exact path='/spots/:spotId' component={SpotShowContainer} />
      <ProtectedRoute exact path='/users/:userId/bookings' component={UserProfileContainer} />

    </Switch>
    
    <Modal />
  </section>
  )
}

export default withRouter(App)

import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import FilterForm from './filter_form';

const Search = () =>{
    return (
        
    <div className='search'>

            <span className="icon"></span>
            {/* <h1 className ='search'>Find a host with a ghost..</h1> */}
            <input type="text" placeholder="try session token" value=""/>
    </div>
       
        
    )

  
}


export default Search
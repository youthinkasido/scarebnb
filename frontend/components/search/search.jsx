
import React from 'react';
import {Link} from 'react-router-dom';

import FilterForm from './filter_form';
const Search = () =>{
    return (
    <div className='nav-bar'>
            <Link className="link" to={'/signup'}>Sign Up<span>&nbsp; &nbsp;</span></Link>
    
            <Link className="link" to={'/login'}>Sign In<span>&nbsp; &nbsp;</span></Link>
        
    </div>
    )

}


export default Search
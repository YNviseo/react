import React from 'react'
import Logo from './logo';
import { Route} from 'react-router-dom'
import Navigation from './navigation';

export default class Navbar extends React.Component {
    render() {
        return   <div className="navbar">
                    <Logo />
                    <Route component={Navigation} />
             </div>
    }
}
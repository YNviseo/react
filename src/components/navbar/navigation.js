
import React from 'react';
import {  Link } from 'react-router-dom'
import auth from "../../services/auth";

export default class Navigation extends React.Component {

    render() {
        if (!auth.isAuthenticated()) {
            return (
                <ul className="main-navigation">
                    <li>
                    <Link to="/login">S'identifier</Link>
                        <span className="link"></span>
                    </li>
                    <li>
                        <Link className="primary" to="/register">S'inscrire</Link>
                    </li>
             </ul>
            )
        }
        else {
            return(
                <ul className="main-navigation">
                <li>
                    <span>User infos here</span>
                </li>
                <li>
                    <button className="primary" onClick={
                        () => {
                            auth.logout(() => {
                                this.props.history.push('/login')
                            });
                        }
                    }>Logout</button>
                </li>
         </ul>
            )
        }
 
        
    }

}
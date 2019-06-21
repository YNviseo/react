import React from 'react'
import "../../styles/components/_login.scss";
import Navbar from '../navbar/navbar';
import auth from '../../services/auth';
import Profile from '../screens/profile';
import { Route} from 'react-router-dom'
export default class Login extends React.Component {
  
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'le username est requis' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'le mote est Requis' });
    }

    auth.login(() => {
      this.props.history.push('/profile');
      return this.setState({ error: '' });
    })

  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }


  render() {

    if (auth.isAuthenticated()) {
      this.props.history.push('/profile')
      return   <Route component={Profile} />
    }
    else {
      return(
        <div className="app">
        <Navbar/>
          <div className="login-container">
            <div className="login-box box">
              <h3>Connectez vous à votre compte</h3>
  
            <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" className="error">
                {this.state.error}
              </h3>
            }
            <div>
              <label>Email</label>
              <input type="text" data-test="username" value={this.state.username} onChange={this.handleUsernameChange} />
            </div>
            <div>
            <label>Password</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
  </div>
            <input className="secondary" type="submit" value="S'inscrire" data-test="submit" />
          </form>
            </div>
          </div>
        </div>
      )
    }
 
  }
}

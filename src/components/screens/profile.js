import React from 'react';
import Navbar from '../navbar/navbar';
import userService from '../../services/user';
import "../../styles/components/_profile.scss";
export default class Profile extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      profile: []
      }
  }
  

  componentDidMount()  {
    const self = this;
    Promise.all([userService.getUser()]).then(function(response) {
      const profile = response[0].data.results[0];
      self.setState({
        profile: profile
      })
    });
  }

  render() {
    return ( 
      <div className="app">
      <Navbar />
      <div className="profile-container">

      <div className="profile-box box">
        <img src= {this.state.profile.picture?this.state.profile.picture.large:""} />
        <div className="profile-content">
        <span className="personnal-infos "> {this.state.profile.name?this.state.profile.name.first:""}  {this.state.profile.name?this.state.profile.name.last:""} ,  {this.state.profile.dob?this.state.profile.dob.age:""}</span>
        <span>  {this.state.profile.location?this.state.profile.location.city:""} ,  {this.state.profile.nat}</span>
        <span>  Phasellus dignissim, tellus in pellentesque mollis, mauris orci dignissim nisl, id gravida nunc enim quis nibh. Maecenas convallis eros a ante dignissim.</span>
      </div>
        <hr />
      <button className="secondary seeProfile" >Voir Profile</button>
      <button className="link">Supprimer le profile</button>
  
      </div>


        </div>
    </div>
   
    )
  }
}
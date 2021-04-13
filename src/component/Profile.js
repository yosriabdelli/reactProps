import React from 'react';

const Profile = props => {
  return (
    <div>
      
      <h1>Hello I'm {props.fullName} <br/> {props.bio} <br/> {props.profession}</h1>
      {props.children}
      <button onClick={()=>props.handleAlert(props.fullName)}>Alert</button>
    </div>
  )
}
export default Profile;
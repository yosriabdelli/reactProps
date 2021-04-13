import './App.css';
import Profile from './component/Profile';

import myWonderfulImage from "./images/John-Doe.jpg";

import PropTypes from 'prop-types';

function App() {
  const handleAlert = (name) => alert(`Hi! I am a ${name}`);

  return (
    <div className="App">
      <Profile fullName = "Yosri Abdelli" bio="Nice to meet you " profession="Web devlopper" handleAlert={handleAlert}>
        <img class="avatar" src={myWonderfulImage} alt="jhon-doe" /><br/>
        
      </Profile>
    </div>
  );
}

//PropTypes
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
};


export default App;



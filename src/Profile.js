import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Profile.css"
function Profile(props) {
  const sendMessage = () => { alert("Message sent");}
  return (
    <div className='profile'>
    <h2 className='profile__name'>{props.profile_name}</h2>
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className='profile__image'
    />
    <button onClick={sendMessage} style={{ backgroundColor:"yellow" }}>Send a message</button>
    </div>
  );
}
export default Profile;

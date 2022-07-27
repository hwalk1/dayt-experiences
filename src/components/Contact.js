import React from 'react'
// import Phone from '../images/phone-icon.png'
// import Mail from '../images/mail-icon.png'


export default function Contact(props) {
  return (
      <div className="contact-card">
          <img src={props.img} alt="cat"/>
          <h3>{props.name}</h3>
          <div className="info-group">
              <img src="/images/phone-icon.png" alt="Phone Icon"/>
              <p>{props.phone}</p>
          </div>
          <div className="info-group">
              <img src="/images/mail-icon.png" alt="mail icon" />
              <p>{props.email}</p>
          </div>
      </div>
  );
};

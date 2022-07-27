import React from 'react'
// import Phone from '../images/phone-icon.png'
// import Mail from '../images/mail-icon.png'


export default function Contact({img, name, phone, email}) {
  return (
      <div className="contact-card">
          <img src={img} alt="cat"/>
          <h3>{name}</h3>
          <div className="info-group">
              <img src="/images/phone-icon.png" alt="Phone Icon"/>
              <p>{phone}</p>
          </div>
          <div className="info-group">
              <img src="/images/mail-icon.png" alt="mail icon" />
              <p>{email}</p>
          </div>
      </div>
  );
};

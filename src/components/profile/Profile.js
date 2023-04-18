import React from "react";
import './profile.css'
import logo from './1.jpg'
function Profile() {
  return (
    <div className="box">
      <img src={logo} alt="" className="box-img" />
      <ul className="one">
        <li>NAME : Annie Marie</li>
        <li>FATHER'S NAME : Chris Marie</li>
        <li>MOTHER'S NAME : Brayn Marie</li>
        <li>DATE OF BIRTH : 02/11/1990</li>
        <li>GENDER : Female</li>
        <li>NATIONALITY : American</li>
        <li>GRADUATION YEAR : 2012</li>
        <li>RELIGION : Christian</li>
        <li>QUALIFICATION : B.Tech (Computer Science)</li>
        <li>EMAIL : annie455afk@gmail.com</li>
        <li>PHONE NO. : +1-2217281029</li>
        <li>ADDRESS : Washington , D.C. ,USA</li>
        <li>ADDRESS : Washington , D.C. ,USA</li>
      </ul>
    </div>
  );
}

export default Profile;

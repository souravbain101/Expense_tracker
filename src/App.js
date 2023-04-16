import React from 'react'
// import { useState } from 'react';
import Home from './components/home/Home';
import Newhome from './components/newhomefiles/Newhome';
import Navbar from './components/navbar/Navbar'
import Show from './components/showfiles/Show';
import Track from './components/addexpences/Track';
import Modal from './components/signup/SignupModal'

import {Routes , Route} from 'react-router-dom';

// import Footer from './components/Footer/Footer';
// import Signup from './components/signup/Signup';
// import Signin from './components/signup/Signin';
import ForgatePassword from './components/signup/ForgetPassword/ForgatePassword';
import Resetpassword from './components/signup/ForgetPassword/Resetpassword';


function App() {
  // const [isauthenticated,setauthenticated]=useState(false);
  const pages = ["Home", "Track expences", "Show expences"];
  
  return (
    <>
    
    <Navbar pages={pages}  dark={false}/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Newhome/>} />
      <Route path='/Track expences' element={<Track/>} />
      <Route path='/create account' element={<Modal/>} />
      <Route path='/Show expences' element={<Show/>} />
      {/* <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} /> */}
      <Route path='/forgetpassword' element={<ForgatePassword/>} />
      <Route path='/resetpassword' element={<Resetpassword/>} />
    </Routes>
    {/* <Footer/> */}
    
    </>
  )
}

export default App;

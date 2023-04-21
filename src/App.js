import React from 'react'
import { useState,createContext } from 'react';
import Home from './components/home/Home';
import Newhome from './components/newhomefiles/Newhome';
import Navbar from './components/navbar/Navbar'
import Show from './components/showfiles/Show';
import Track from './components/addexpences/Track';
// import Modal from './components/signup/SignupModal'
import { useEffect } from 'react';
import {Routes , Route} from 'react-router-dom';

// import Footer from './components/Footer/Footer';
// import Signup from './components/signup/Signup';
// import Signin from './components/signup/Signin';
import ForgatePassword from './components/signup/ForgetPassword/ForgatePassword';
import Resetpassword from './components/signup/ForgetPassword/Resetpassword';
import { Gettoken } from './components/Api/StoreToken/StoreToken';
import Profile from './components/Profile/Profile';

export const Context=createContext();
function App() {
  const [isauthenticated,setauthenticated]=useState(false);
  
  useEffect(()=>{
    const token =Gettoken();
    if (token) {
      setauthenticated(true);
    }
    else{
      setauthenticated(false);
    }
    },[]);
   
    
    const provide={
      setauthenticated,isauthenticated
    }
  const pages = ["Dashboard", "Track expences", "Show expences"];
  const pages1 = ["Home","Contact"];
  
  // const [isAuthenticated,setAuthenticated]=useState(false);

  //get token
  
  
  return (
    <>
   <Context.Provider value={provide}>
    {isauthenticated?<Navbar pages={pages} profile={true}  dark={false}/>:<Navbar pages={pages1} profile={false} dark={false}/>}
    
    <Routes>
    <Route path='/home' element={<Home /> } />
    <Route path='/' element={<Home /> } />
      <Route path='/dashboard' element={<Newhome/>} />
      <Route path='/Track expences' element={<Track/>} />
      <Route path='/Show expences' element={<Show/>} />
      <Route path='/forgetpassword' element={<ForgatePassword/>} />
      <Route path='/resetpassword' element={<Resetpassword/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='*' element={<h1>404 Page not found !!</h1>}/>
    </Routes>
    {/* <Footer/> */}
    
    </Context.Provider>
    </>
  )
}

export default App;

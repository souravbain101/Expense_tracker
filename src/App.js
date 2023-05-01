import React, { useEffect} from 'react'
import { useState,createContext } from 'react';
import Home from './components/home/Home';
import Newhome from './components/newhomefiles/Newhome';
import Navbar from './components/navbar/Navbar'
import Show from './components/showfiles/Show';
import Track from './components/addexpences/Track';
import {Routes , Route, useNavigate,} from 'react-router-dom';
import ForgatePassword from './components/signup/ForgetPassword/ForgatePassword';
import Resetpassword from './components/signup/ForgetPassword/Resetpassword';
import { Get_Refresh_token, Gettoken } from './components/Api/StoreToken/StoreToken';
import Profile from './components/Profile/Profile';
import jwt_decode from "jwt-decode";
import Verifytoken from './components/Api/StoreToken/Verifytoken';
import { Refresh_token_api } from './components/Api/axios';
import { Storetoken } from './components/Api/StoreToken/StoreToken';


export const Context=createContext();
function App() {
  const navigate=useNavigate();
  const [isauthenticated,setauthenticated]=useState(false);

  useEffect(()=>{
    
    const access_token =Gettoken();
    const refresh_token=Get_Refresh_token();
    if (access_token && refresh_token) {
      var decoded_access = jwt_decode(access_token);
      var decoded_refresh = jwt_decode(refresh_token);
      
      
      const  verify_access=Verifytoken(decoded_access); 
      const  verify_refresh=Verifytoken(decoded_refresh); 
      if (verify_access===true && verify_refresh===true) {
        setauthenticated(true);       
        navigate('/dashboard')
        
      }
      else if(verify_access===false && verify_refresh===true){
        setauthenticated(true);
        handle_Refresh_token_api(refresh_token);           
        navigate('/dashboard');
      }
      else{
        setauthenticated(false);
        localStorage.clear();       
        navigate('/');
      }
    }
    else{
      console.log("token not present");
    }
       //eslint-disable-next-line
    },[isauthenticated]);



    useEffect(()=>{
      setInterval(()=>{
        const access_token =Gettoken();
        const refresh_token=Get_Refresh_token();
        if (access_token && refresh_token) {
          var decoded_access = jwt_decode(access_token);
          var decoded_refresh = jwt_decode(refresh_token);
          
          
          const  verify_access=Verifytoken(decoded_access); 
          const  verify_refresh=Verifytoken(decoded_refresh); 
          if (verify_access===true && verify_refresh===true) {
            setauthenticated(true);            
            navigate('/dashboard')
            
          }
          else if(verify_access===false && verify_refresh===true){
            setauthenticated(true);
            handle_Refresh_token_api(refresh_token);                   
            navigate('/dashboard');
          }
          else{
            setauthenticated(false);
            localStorage.clear();            
            navigate('/');
          }
        }
        else{
          console.log("token not present");
        }
      },600000);
      //eslint-disable-next-line
    },[])
 
    
 
  const handle_Refresh_token_api=async(refresh_token)=>{
    
    const res=await Refresh_token_api(refresh_token);
    console.log('After  api call');
    
    Storetoken('access_token',res.data.token.access_token);
    Storetoken('refresh_token',res.data.token.refresh_token);

  }
    
    const provide={
      setauthenticated,isauthenticated
    }
  const pages = ["Dashboard", "Track expences", "Show expences"];
  const pages1 = ["Home","Contact"];
  
  
  if (isauthenticated ) {
    return(
      <>
  <Context.Provider value={provide}>
  {isauthenticated?<Navbar pages={pages} profile={true}  dark={false}/>:<Navbar pages={pages1} profile={false} dark={false}/>}
      <Routes>
      
    <Route path='/dashboard' element={<Newhome/>} />
      <Route path='/Track expences' element={<Track/>} />
      <Route path='/Show expences' element={<Show/>} />
      <Route path='/profile' element={<Profile/>} />
      </Routes>
      </Context.Provider>
      </>
    )
  }
  return (
    <>
   <Context.Provider value={provide}>
    {isauthenticated?<Navbar pages={pages} profile={true}  dark={false}/>:<Navbar pages={pages1} profile={false} dark={false}/>}
    
    <Routes>
    <Route path='/home' element={<Home /> } />
    <Route path='/' element={<Home /> } />
      
      <Route path='/forgetpassword' element={<ForgatePassword/>} />
      <Route path='/api/user/reset/:id/:token' element={<Resetpassword/>} />
      
      <Route path='*' element={<h1>404 Page not found !!</h1>}/>
    </Routes>
    {/* <Footer/> */}
    
    </Context.Provider>
    </>
  )
}

export default App;

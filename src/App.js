import React from 'react'
import Home from './components/home/HomeFront';
import Newhome from './components/newhomefiles/Newhome';
import Navbar from './components/navbar/Navbar'
import Show from './components/showfiles/Show';
import Track from './components/addexpences/Track';
import Modal from './components/signup/Modal';
import {Routes , Route} from 'react-router-dom';
import Register from './components/signup/Register';

function App() {
  return (
    <>
    <Navbar dark={false}/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Newhome/>} />
      <Route path='/Track expences' element={<Track/>} />
      <Route path='/create account' element={<Modal/>} />
      <Route path='/Show expences' element={<Show/>} />
      <Route path='/signup' element={<Register/>} />
    </Routes>
    </>
  )
}

export default App;

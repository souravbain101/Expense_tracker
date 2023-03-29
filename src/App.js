import React from 'react'
import Home from './components/Home';
import Newhome from './components/Newhome';
import Navbar from './components/Navbar'
import Show from './components/Show';
import Track from './components/Track';
import Modal from './components/Modal';
import {Routes , Route} from 'react-router-dom';

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
    </Routes>
    </>
  )
}

export default App;

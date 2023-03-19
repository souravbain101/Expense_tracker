import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Show from './components/Show';
import Track from './components/Track';
import Register from './components/Register';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar dark={false}/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Track expences' element={<Track/>} />
      <Route path='/create' element={<Register/>} />
      <Route path='/Show expences' element={<Show/>} />
    </Routes>
    </>
  )
}

export default App;

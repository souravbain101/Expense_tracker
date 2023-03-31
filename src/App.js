import React from 'react'
import Home from './components/home/HomeFront';
import Newhome from './components/newhomefiles/Newhome';
import Navbar from './components/navbar/Navbar'
import Show from './components/showfiles/Show';
import Track from './components/addexpences/Track';

import {Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar dark={false}/>
    <Routes>
    <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Newhome/>} />
      <Route path='/TrackExp' element={<Track/>} />   
      <Route path='/ShowExp' element={<Show/>} />   
    </Routes>
    </>
  )
}

export default App;

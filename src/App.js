import './App.css';
import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Todo from './components/Todo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/todo' element={<Todo/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Space, Divider } from 'antd';
import './App.css';
import ShapesPage from './pages/shapes';
import Home from './pages/home'
import FormPage from './pages/form'
const { Header, Footer, Sider, Content } = Layout;



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shapes' element={<ShapesPage/>}></Route>
          <Route path='/form' element={<FormPage/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}


  

export default App;

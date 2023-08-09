import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
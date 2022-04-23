import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';
import Register from './register';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

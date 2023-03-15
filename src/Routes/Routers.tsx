import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AllFood from '../pages/AllFood';
import FoodDetails from '../pages/FoodDetails';
import Cart from '../pages/Cart';
const Routers = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to={'/home'} />}
      />
      <Route
        path='/home'
        element={<Home />}
      />
      <Route
        path='/foods'
        element={<AllFood />}
      />
      <Route
        path='/foods/:id'
        element={<FoodDetails />}
      />
      <Route
        path='/cart'
        element={<Cart />}
      />
    </Routes>
  );
};

export default Routers;

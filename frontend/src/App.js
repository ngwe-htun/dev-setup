import './App.css';
import React from 'react';
import 'primeflex/primeflex.css';
import "primeicons/primeicons.css"; 
import 'bootstrap/dist/css/bootstrap-grid.css';
import LoginPage from './pages/login/LoginPage';
import "primereact/resources/primereact.min.css";
import UserPage from './pages/admin/user/UserPage';
import ItemPage from './pages/admin/item/ItemPage';
import SearchPage from './pages/admin/search/SearchPage';
import BidderPage from './pages/admin/bidder/BidderPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import CategoryPage from './pages/admin/category/CategoryPage';
import PasswordPage from './pages/admin/password/PasswordPage';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {

  return (    
    <Routes>
      { /** Public routes */}
      <Route path='/login' element={<LoginPage />} />

      {/** Private rotues */}
      <Route path='dashboard' element={<DashboardPage />} >
        <Route path='item' element={<ItemPage />} />
        <Route path='user' element={<UserPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='bidder' element={< BidderPage />} />
        <Route path='category' element={<CategoryPage />} />

      </Route>
      <Route path='profile'>
        <Route path='password' element={<PasswordPage />}/>
      </Route>
    </Routes>
  );

}

export default App;

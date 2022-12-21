import React, { useState } from 'react';
 
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/login/LoginPage';
import UserPage from './pages/admin/user/UserPage';
import ItemPage from './pages/admin/item/ItemPage';
import SearchPage from './pages/admin/search/SearchPage';
import BidderPage from './pages/admin/bidder/BidderPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import CategoryPage from './pages/admin/category/CategoryPage';
import PasswordPage from './pages/admin/password/PasswordPage';
import AuctionReportPage from './pages/admin/report/auction/Auction';
import NonAuctionPage from './pages/admin/report/non-auction/NonAuction';
import NonAuctionDetailPage from './pages/admin/report/non-auction/detail/NonAuctionDetail';
import AuctionDetailPage from './pages/admin/report/auction/detail/AuctionDetailPage';
import Home from './pages/client/home/home';
import { GoldCoin } from './pages/client/goldcoin/goldcoin';
import GoldOrder from './pages/client/goldcoin/order/goldorder';

function App() {

  let [greet, setGreet] = useState('');
  let [user, setUser] = useState('');

  return (    
    <Routes>
      { /** Public routes */}
      <Route path='/' element={<Home />} />
      <Route path='/gold' element={<GoldCoin />} />
      <Route path="/gold/order" element={<GoldOrder />} />
      <Route path='/login' element={<LoginPage setGreet={setUser}/>} />

      {/** Private rotues */}
      <Route path='dashboard' element={<DashboardPage greet={user}/>} >
        <Route path='item' element={<ItemPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='bidder' element={< BidderPage />} />
        <Route path='category' element={<CategoryPage />} />
        <Route path='report/auction' element={<AuctionReportPage />} />
        <Route path='report/non-auction' element={<NonAuctionPage />} />
        <Route path='report/auction/detail' element={<AuctionDetailPage />} />
        <Route path='report/non-auction/detail' element={<NonAuctionDetailPage />} />
        <Route path='users' element={<UserPage />} />
        <Route path='manage'>
          <Route path='password' element={< PasswordPage user={user} />} />
        </Route>

      </Route>
      <Route path='manage'>
      <Route path='report/auction' element={<AuctionReportPage />} />

      <Route path='report/non-auction' element={<NonAuctionPage />} />
        <Route path='users' element={<UserPage />} />
        <Route path='password' element={<PasswordPage />}/>
      </Route>
    </Routes>
  );

}

export default App;

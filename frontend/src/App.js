 
import React, { useState } from 'react';
import "primereact/resources/primereact.css";
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/login/LoginPage';
import UserPage from './pages/admin/user/UserPage';
import ItemPage from './pages/admin/item/ItemPage';
import SearchPage from './pages/admin/search/SearchPage';
import BidderPage from './pages/admin/bidder/BidderPage';
import { Route, Routes} from 'react-router-dom';
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
import { PureGold } from './pages/client/puregold/puregold';
import "./App.css";
import { Gem } from './pages/client/gem/gem';
import { Jade } from './pages/client/jade/jade';
import BidGem from './pages/client/gem/bid/bidGem';
import { OrderShouldAvailable } from './routes/shouldAvailable';
import { CanBidWithLot } from './routes/canBidWithLot';
import { CanOrder } from './routes/canOrder';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import OrderPdf from './components/pdf/orderpdf';
import { BidPureGold } from './pages/client/puregold/bid/bid';
import { BidJade } from './pages/client/jade/bid/bidJade';
// import "./common/responsive.css";
import { HasOrderInfo } from './routes/hasOrderInfo';
import { BidDetail } from './pages/client/detail/bid/detail';
import OrderDetail from './pages/client/detail/order/detail';
import OrderPdf from './components/pdf/orderpdf';
import { ClientToken } from './routes/clientToken';
import { getClientToken, storeClientToken } from './services/storage/ClientStorage';
import { registerToken } from './services/ClientService';
import { Logout } from './services/LogoutService';
import { PrivateRoute } from './routes/privateRoute';

function App() {

  let [user, setUser] = useState('');
  let [available, setAvailable] = useState(false);
  
  return (
    <Routes>
      <Route path='/orderdetail' element={<OrderDetail />} />
      <Route path='/export' element={<OrderPdf name={"test"} fatherName={"test"} />} />

      { /** Public routes */}
      <Route element={<ClientToken/>}>
        <Route path='/' element={<Home />} />
        {/** Route only if order/bid available */}
        <Route element={<OrderShouldAvailable />}>
          <Route path="/gold" element={<GoldCoin />} />
          <Route path='/puregold' element={<PureGold/>}/>
          <Route path='/gem' element={<Gem />} />
          <Route path='/jade' element={<Jade />} />
        </Route>
        {/** Bid with lot */}
        <Route element={<CanBidWithLot />}>
          <Route path='/gem/bid' element={<BidGem />} />
          <Route path='/jade/bid' element={<BidJade />} />
          <Route path="/puregold/bid" element={<BidPureGold />} />
        </Route>
        {/** Can order */}
        <Route element={<CanOrder />}>
          <Route path='/gold/order' element={<GoldOrder />}></Route>
        </Route>
        {/** Order/Bid detail */}
        <Route element={<HasOrderInfo />}>
          <Route path="/gold/order/detail" element={<OrderDetail />} />
          <Route path='/jade/bid/detail' element={<BidDetail />}></Route>
          <Route path='/gem/bid/detail' element={<BidDetail />}></Route>
          <Route path='/puregold/bid/detail' element={<BidDetail />}></Route>
        </Route>
      </Route>

      {/** LOGIN */}
      <Route path='/login' element={<LoginPage setGreet={setUser}/>} />
      {/* <Route path='/logout' element={Logout()} /> */}

      {/** Private rotues */}
      <Route element={<PrivateRoute/>}>
      <Route path='dashboard' element={<DashboardPage greet={user} />} >
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
        <Route path='password' element={<PasswordPage />} />
      </Route>
      </Route>
    </Routes>
  );

}

export default App;

 
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import React, { useState } from 'react';
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
import { CanBid } from './routes/canBid';
import { CanOrder } from './routes/canOrder';
import 'primeicons/primeicons.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import OrderPdf from './components/pdf/orderpdf';
import { BidPureGold } from './pages/client/puregold/bid/bid';
import { BidJade } from './pages/client/jade/bid/bidJade';
import "./common/responsive.css";

function App() {

  let [user, setUser] = useState('');
  let [itemId, setItemId] = useState('');
  let [available, setAvailable] = useState(false);
  let [biderRegNo, setBiderRegNo] = useState('123456');
  let [lotNo, setLotNo] = useState('12345');

  const [bidder, setBidder] = useState(null);

  return (
    <Routes>
      { /** Public routes */}
      <Route path='/' element={<Home setAvailable={setAvailable} />} />
      <Route path='/login' element={<LoginPage setGreet={setUser}/>} />
      
      {/** Route only if order/bid available */}
      <Route element={<OrderShouldAvailable data={available} />}>
        <Route path="/gold" element={
            <GoldCoin 
                setGoldCoinAvailable={setAvailable}
                setOrderItem={setItemId}
                />
        } />
        <Route path='/puregold' element={
            <PureGold/>
        }/>
        <Route path='/gem' element={<Gem setBidder={setBidder}/>} />
        <Route path='/jade' element={<Jade />} />
      </Route>

      {/** Bid with lot */}
      <Route element={<CanBidWithLot regNo={biderRegNo} lotNo={lotNo} />}>
        <Route path='/gem/bid' element={<BidGem regNo={biderRegNo} lotNo={lotNo} />} />
        <Route path='/jade/bid' element={<BidJade regNo={biderRegNo} lotNo={lotNo} />} />
      </Route>

      {/** Bid without lot */}
      <Route element={<CanBid regNo={12345} />}>
        <Route path="/puregold/bid" element={<BidPureGold biderRegNo={12345}/>}></Route>
      </Route>

      {/** Can order */}
      <Route element={<CanOrder itemId={1} />}>
        <Route path='/gold/order' element={<GoldOrder itemId={1}/>}></Route>
      </Route>

      {/** Private rotues */}
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
    </Routes>
  );

}

export default App;

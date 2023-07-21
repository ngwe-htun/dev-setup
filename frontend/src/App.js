import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AuctionDetailPage from "./pages/admin/report/auction/detail/AuctionDetailPage";
import AuctionReportPage from "./pages/admin/report/auction/Auction";
import { BidDetail } from "./pages/client/detail/bid/detail";
import BidGem from "./pages/client/gem/bid/bidGem";
import { BidJade } from "./pages/client/jade/bid/bidJade";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { BidPureGold } from "./pages/client/puregold/bid/bid";
import BidderPage from "./pages/admin/bidder/BidderPage";
import { CanBidWithLot } from "./routes/canBidWithLot";
import { CanOrder } from "./routes/canOrder";
import CategoryPage from "./pages/admin/category/CategoryPage";
import { ClientToken } from "./routes/clientToken";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { Gem } from "./pages/client/gem/gem";
import { GoldCoin } from "./pages/client/goldcoin/goldcoin";
import GoldOrder from "./pages/client/goldcoin/order/goldorder";
// import "./common/responsive.css";
import { HasBidInfo } from "./routes/hasBidInfo";
import { HasOrderInfo } from "./routes/hasOrderInfo";
import Home from "./pages/client/home/home";
import ItemPage from "./pages/admin/item/ItemPage";
import { Jade } from "./pages/client/jade/jade";
import LoginPage from "./pages/login/LoginPage";
import NonAuctionDetailPage from "./pages/admin/report/non-auction/detail/NonAuctionDetail";
import NonAuctionPage from "./pages/admin/report/non-auction/NonAuction";
import OrderDetail from "./pages/client/detail/order/detail";
import { OrderShouldAvailable } from "./routes/shouldAvailable";
import PasswordPage from "./pages/admin/password/PasswordPage";
import { PrivateRoute } from "./routes/privateRoute";
import { PureGold } from "./pages/client/puregold/puregold";
import SearchPage from "./pages/admin/search/SearchPage";
import UserPage from "./pages/admin/user/UserPage";

function App() {
  let [user, setUser] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  return (
    <Routes>
      <Route path="/orderdetail" element={<OrderDetail />} />
      {/** Public routes */}
      <Route
        element={
          <ClientToken isLoading={isLoading} setIsLoading={setIsLoading} />
        }
      >
        <Route path="/" element={<Home />} />
        {/** Route only if order/bid available */}
        <Route element={<OrderShouldAvailable />}>
          <Route path="/gold" element={<GoldCoin />} />
          <Route path="/puregold" element={<PureGold />} />
          <Route path="/gem" element={<Gem />} />
          <Route path="/jade" element={<Jade />} />
        </Route>
        {/** Bid with lot */}
        <Route element={<CanBidWithLot />}>
          <Route path="/gem/bid" element={<BidGem />} />
          <Route path="/jade/bid" element={<BidJade />} />
          <Route path="/puregold/bid" element={<BidPureGold />} />
        </Route>
        {/** Can order */}
        <Route element={<CanOrder />}>
          <Route path="/gold/order" element={<GoldOrder />}></Route>
        </Route>

        <Route element={<HasOrderInfo />}>
          <Route path="/gold/order/detail" element={<OrderDetail />} />
        </Route>
        {/** Order/Bid detail */}
        <Route element={<HasBidInfo />}>
          <Route path="/jade/bid/detail" element={<BidDetail />}></Route>
          <Route path="/gem/bid/detail" element={<BidDetail />}></Route>
          <Route path="/puregold/bid/detail" element={<BidDetail />}></Route>
        </Route>
      </Route>
      {/* </Route> */}

      {/** LOGIN */}
      <Route path="/login" element={<LoginPage setGreet={setUser} />} />

      {/** Private rotues */}
      <Route element={<PrivateRoute />}>
        <Route path="dashboard" element={<DashboardPage greet={user} />}>
          <Route path="item" element={<ItemPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="bidder" element={<BidderPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="report/auction" element={<AuctionReportPage />} />
          <Route path="report/non-auction" element={<NonAuctionPage />} />
          <Route path="report/auction/detail" element={<AuctionDetailPage />} />
          <Route
            path="report/non-auction/detail"
            element={<NonAuctionDetailPage />}
          />
          <Route path="users" element={<UserPage />} />
          <Route path="manage">
            <Route path="report/auction" element={<AuctionReportPage />} />

            <Route path="report/non-auction" element={<NonAuctionPage />} />
            <Route path="users" element={<UserPage />} />
            <Route path="password" element={<PasswordPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MenuBarComponent from "../../components/menubar/MenuBarComponent";
import SidebarComponent from "../../components/sidebar/sidebar";
import BidderPage from "../admin/bidder/BidderPage";
import { Button } from 'primereact/button';
import { Title } from "../../config/title";

// Dashboard layout
export default function DashboardPage() {
    
    return (
        <>
            <div>
                <MenuBarComponent />
          <div className="grid m-0 p-0">
            <div className="col-2 pb-0">
                <SidebarComponent />
            </div>
            <div className="col-10">
                <Outlet />
            </div>
          </div>
            </div>
          : <div className="grid">
              <div className="col text-center text-middle">
                <h3>Can not use in Mobile devices</h3>
              </div>
            </div>
        </>
        
    );
}

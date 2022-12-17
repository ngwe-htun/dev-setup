import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import MenuBarComponent from "../../components/menubar/MenuBarComponent";
import SidebarComponent from "../../components/sidebar/sidebar";
import BidderPage from "../admin/bidder/BidderPage";
import { Button } from 'primereact/button';
import { Title } from "../../config/title";

// Dashboard layout
const DashboardPage = ({greet}) => {
    console.log(greet)
    
    return (
        <>
          <MenuBarComponent name={greet}/>
          <div>
          <div className="grid m-0 p-0">
            <div className="col-fixed pb-0" style={{width: "250px"}}>
                <SidebarComponent/>
            </div>
            <div className="col pl-7">
              <Outlet />
            </div>
          </div>
            </div>
            <h1>{greet}</h1>
        </>
        
    );
}

export default DashboardPage;

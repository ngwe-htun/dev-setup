import { Container } from "react-bootstrap";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import NavbarComponent from "../../components/NavbarComponent";

export default function DashboardPage() {
    return (
        <>
        <NavbarComponent />
        <div class="container-fluid">
            
    <div class="row">
        
        <div class="col-auto col-md-3 col-xl-2 bg-light">
            <div class="d-flex flex-column align-items-sm-start text-white min-vh-100">
                <ul class="nav nav-pills flex-column mb-sm-auto " id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Search (ရှာရန်)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Category List</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Item List</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Bidder’s Reg No List</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>

        </>
    );
}

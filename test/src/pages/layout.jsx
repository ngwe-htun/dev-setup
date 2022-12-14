import { Outlet } from "react-router-dom";
import { Card } from 'primereact/card'; 

export default function Layout() {
    return (
        <div style={{ color: "red"}}>
            <div className="grid p-7 bg-primary">
                <div className="col text-left"><h6>hello</h6></div>
                <div className="col text-right">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
import "./sidebar.css";
import { Menu } from 'primereact/menu';
import { Title } from "../../config/title";
import { useNavigate } from 'react-router-dom';
import {Accordion} from 'primereact/accordion';
import {AccordionTab} from 'primereact/accordion';

const SidebarComponent = () => {
    const navigate = useNavigate();

    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    
    const items =[
        {
            label: Title.dashboard_side_search,
            command:(e) => {
                navigate('search')
            }
        }, 
        {
            label: "Auction report",
            command:(e) => {
                navigate('report/auction')
            }
        },
        {
            label: "Non-auction report",
            command:(e) => {
                navigate('report/non-auction')
            }
        },
        {
            label: Title.dashboard_side_category,
            command:(e) => {
                navigate('category')
            }

        },
        {
            label: Title.dashboard_side_item,
            command:(e) => {
                navigate('item')
            }

        },
        {
            label: Title.dashboard_side_bidder,
            command:(e) => {
                navigate('bidder')
            }
        }
    ];
    
    return (
        <>
          <div className="grid">
            <div className="col p-0 w-full" >
              <Menu model={items} className="border-noround border-y-none sidebar mr-3 fixed" />
            </div>
          </div>
        </>
    );
}


export default SidebarComponent; 
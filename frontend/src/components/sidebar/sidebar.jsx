import "./sidebar.css";
import { Menu } from 'primereact/menu';
import { Title } from "../../config/title";
import { useNavigate } from 'react-router-dom';
import {Accordion} from 'primereact/accordion';
import {AccordionTab} from 'primereact/accordion';

const SidebarComponent = () => {
    const navigate = useNavigate();
    
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
            <Menu model={items} className="border-noround border-y-none sidebar mr-3 fixed w-12rem" />
        </>
    );
}


export default SidebarComponent; 
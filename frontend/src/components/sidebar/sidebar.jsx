import "./sidebar.css";
import { Menu } from "primereact/menu"; 
import { Title } from "../../config/title";
import { useNavigate } from 'react-router-dom';

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
            <div className="col p-0" >
              <Menu model={items} className="border-noround border-y-none sidebar" />
            </div>
          </div>
        </>
    );
}


export default SidebarComponent; 
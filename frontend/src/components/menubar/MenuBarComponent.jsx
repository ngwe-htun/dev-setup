import { Menubar } from 'primereact/menubar';
import '../../common/common.css';
import './MenuBar.css';
import text from '../../config/text.json';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';

const MenuBarComponent = () => {

    const navigate = useNavigate();

    const userDropDown = [
        { name: 'Change Password (လျှို့ဝှက်နံပါတ်ပြောင်းမည်)', 'link': '/profile/password' },
        { name: 'Manage Users (အသုံးပြုသူများကို စီမံမည်)' },
        { name: 'Logout (ထွက်မည်)' }
    ];

    return (
        <div className='grid m-0 p-0'>
            <div className='col text-white m-0 p-0'>
              <Menubar 
                start={
                    <div className='grid pl-3 m-0'>
                        <div className='col'><img src="logo.png"  className='menubar-img' /></div>
                        <div className='col align-content-middle'><span className='menubar-title'>{text.menubar_title}</span></div>
                    </div>
                } 
                className="main-background menubar"
                end={
                    <Dropdown placeholder="Kyaw Kyaw" options={userDropDown} optionLabel="name"  className='menubar-end text-white pr-3' scrollHeight='500px' onChange={ (e) => navigate(e.target.value.link) }  />
                }
            />
            </div>
        </div>
    );
}
 
export default MenuBarComponent;
import { Menubar } from 'primereact/menubar';
import '../../common/common.css';
import './MenuBar.css';
import text from '../../config/text.json';
import { Dropdown } from 'primereact/dropdown';

const MenuBarComponent = () => {

    const userDropDown = [
        { name: 'Change Password (လျှို့ဝှက်နံပါတ်ပြောင်းမည်)' },
        { name: 'Manage Users (အသုံးပြုသူများကို စီမံမည်)' },
        { name: 'Logout (ထွက်မည်)' }
    ];

    return (
        <div className='grid'>
            <div className='col text-white'>
              <Menubar 
                start={
                    <div className='grid pl-3'>
                        <div className='col'><img src="logo.png"  className='menubar-img' /></div>
                        <div className='col align-content-middle'><span className='menubar-title'>{text.menubar_title}</span></div>
                    </div>
                } 
                className="main-background menubar"
                end={
                    <Dropdown placeholder="Kyaw Kyaw" options={userDropDown} optionLabel="name"  className='menubar-end text-white pr-3' scrollHeight='500px'  />
                }
            />
            </div>
        </div>
    );
}
 
export default MenuBarComponent;
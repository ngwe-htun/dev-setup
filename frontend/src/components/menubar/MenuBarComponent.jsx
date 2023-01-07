import { Menubar } from 'primereact/menubar';
import '../../common/common.css';
import './MenuBar.css';
import text from '../../config/text.json';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../services/LogoutService';
import { useEffect, useState } from 'react';
import { getUserInfo } from '../../services/storage/AdminStorage';

const MenuBarComponent = () => {

    const user = {}//JSON.parse(getUserInfo());
    const navigate = useNavigate();
    const [action, setAction] = useState('');

    const profileItems = [
        { name: 'Change Password (လျှို့ဝှက်နံပါတ်ပြောင်းမည်)', 'path': '/dashboard/manage/password' },
        { name: 'Manage Users (အသုံးပြုသူများကို စီမံမည်)', 'path': 'users' },
        { name: 'Logout (ထွက်မည်)'}
    ];

    // Action
    useEffect(() => {
        if (action) {
            let path = action.path;
            if (path) {
                navigate(path)
            } else {
                Logout();
                navigate('/login');
            }
        }
    }, [action, navigate]);

    return (
            <div className="menubar w-full">
              <Menubar 
                className='w-full'
                start={
                    <div className='grid pl-3 m-0 p-0'>
                        <div className='col'><img src="/logo.png" className='menubar-img' alt='logo' /></div>
                        <div className='col align-content-middle'><span className='menubar-title'>{text.menubar_title}</span></div>
                    </div>
                } 
                end={
                    <Dropdown placeholder={user.name} options={profileItems} optionLabel="name"  className='menubar-end text-white pr-3' scrollHeight='500px'  onChange={(e) => setAction(e.target.value)} />
                }
            />
            </div>
    );
}
 
export default MenuBarComponent;
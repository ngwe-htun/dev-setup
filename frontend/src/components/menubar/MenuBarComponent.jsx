import { Menubar } from 'primereact/menubar';
import '../../common/common.css';
import './MenuBar.css';
import text from '../../config/text.json';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from 'react-router-dom';
import { profileItems } from '../../config/title';

const MenuBarComponent = ({name}) => {

    const navigate = useNavigate();

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
                    <Dropdown placeholder={name} options={profileItems} optionLabel="name"  className='menubar-end text-white pr-3' scrollHeight='500px' onChange={ (e) => navigate(e.target.value.link) }  />
                }
            />
            </div>
    );
}
 
export default MenuBarComponent;
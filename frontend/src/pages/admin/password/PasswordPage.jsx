import "../../../common/common.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Title } from '../../../config/title';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';

const PasswordPage = () => {

    const navigate = useNavigate();
    
    return (
        <div className="grid justify-item-center">
            <div className="col-4 col-offset-4 pt-6 mx-auto">
               
                {/** Title */}
                <h2 className='text-center'>{Title.manage_password_title}</h2>


                <div>
                  <Card className='w-27rem mx-auto'>
                    <div className='pt-0'>
                      <label htmlFor="old_pass" className="block">{Title.manage_password_old_password_title}</label>
                      <InputText id="old_pass" className="block w-full"/>
                    </div>
                    <div className='pt-3'>
                      <label htmlFor="old_pass_confirm" className="block">{Title.manage_password_new_password_label}</label>
                      <InputText id="old_pass" className="block w-full"/>
                    </div>
                    
                    <div className='pt-3'>
                      <label htmlFor="new_pass" className="block">{Title.manage_passowrd_confirm_new_password}</label>
                      <InputText id="new_pass" className="block w-full"/>
                    </div>
                  </Card>
                </div>

                <div className='mt-4 w-27rem mx-auto'>
                  <Button label={Title.manage_password_action_yes} aria-label="Submit"  className='block w-full button-size' />
                  <Button label={Title.manage_password_action_no} aria-label="Submit"  className='block w-full p-button-outlined mt-3 button-size' onClick={() => navigate(-1)} />
                </div>
            </div>
        </div>
    );
}

export default PasswordPage;
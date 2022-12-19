import "../../../common/common.css";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Title } from '../../../config/title';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from "react";
import { Password } from "primereact/password";
import { ChangePassword } from "../../../services/UserService";


const PasswordPage = ({user}) => {

    const navigate = useNavigate();
    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newPassConfrim, setNewPassConfirm] = useState('');
    const [showNewPassNotMatch, setShowNewPassNotMatch] = useState(false);
    const [notMatchClass, setNotMatchClass] = useState('');

    // Change user pass
    const changeUserPass = async () => {
      try {
        let isMatch = checkConfirmation();
        if (isMatch) {
          let res = await ChangePassword(user.name, oldPass, newPass, newPassConfrim);
        }
      } catch (err) {
        console.log(err);
      }
    }

    // Check confirmation
    const checkConfirmation = () => {
      if (newPass === newPassConfrim) {
        setShowNewPassNotMatch(false);
        setNotMatchClass('');
        return true;
      } else {
        setShowNewPassNotMatch(true);
        setNotMatchClass('p-invalid');
      }
      return false;
    }

   
    return (
        <div className="grid justify-item-center">
            <div className="col pt-6 mx-auto w-full">
               
                {/** Title */}
                <h2 className='text-center'>{Title.manage_password_title}</h2>

                <div>
                  <Card className='mx-auto w-30rem'>
                    <div className='pt-0'>
                      <label htmlFor="old_pass" className="block">{Title.manage_password_old_password_title}</label>
                      <InputText id="old_pass" value={oldPass} className="block w-full" onChange={ (e) => { setOldPass(e.target.value) } } />
                    </div>
                    <div className='pt-3'>
                      <label htmlFor="old_pass_confirm" className="block">{Title.manage_password_new_password_label}</label>
                      <Password id="old_pass" value={newPass} inputClassName='w-full' className={`${notMatchClass} w-full`} onChange={ (e) => { setNewPass(e.target.value) } }  feedback={false}/>
                    </div>
                    
                    <div className='pt-3'>
                      <label htmlFor="new_pass" className="block">{Title.manage_passowrd_confirm_new_password}</label>
                      <Password id="new_pass" value={newPassConfrim} className={`${notMatchClass} w-full`}  inputClassName="w-full" onChange={ (e) => { setNewPassConfirm(e.target.value); } } feedback={false} />
                    </div>

                    {showNewPassNotMatch ? <p className="text-red-500">{Title.manage_password_should_match}</p> : null }

                  </Card>
                </div>

                {/** Wrong confirm */}


                <div className='mt-4 w-30rem mx-auto'>
                  <Button label={Title.manage_password_action_yes} aria-label="Submit"  className='block w-full button-size' disabled={!(oldPass && newPass && newPassConfrim)}  onClick={ () =>  changeUserPass() } />
                  <Button label={Title.manage_password_action_no} aria-label="Submit"  className='block w-full p-button-outlined mt-3 button-size' onClick={() =>console.log(newPassConfrim)}  />
                </div>
            </div>
        </div>
    );
}

export default PasswordPage;
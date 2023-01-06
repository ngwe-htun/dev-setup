import "./Login.css";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Title } from "../../config/title";
import { Login } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { storeAdminAccessInfo } from "../../services/storage/AdminStorage";


const LoginPage = ({ setGreet }) => {

    const toast = useRef(null);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [failed, setFailed] = useState('');
    const [password, setPassword] = useState('');
    const [failedMessage, setFailedMessage] = useState('');

    // Login
    const onSubmit = async () => {
        try {
          let res = await Login(name, password);
          storeAdminAccessInfo(res);
          navigate('/dashboard/search')
        } catch (err) {
          setFailed('p-invalid block');
          setFailedMessage(Title.login_failed_message);
        }
    }


    return (
    <>
      <Toast ref={toast} />
      <div className="grid m-0 p-0">
        <div className="col m-0 p-0">
          <div className="login-logo-background">
            <div className="text-center pt-5">
              <Image src="logo.png" alt="Image" width="73" height="80"/>  
            </div>
            <div className="text-center pt-1">
              <span className="login-header-text">{Title.login_header}</span>
            </div>          
          </div>
        </div>
      </div>     
      <Card className="login-card p-0">
        <div className="text-center">
          <span className="login-title-eng">{Title.login_title_eng}</span>
          <br />
          <span className="login-title-mm">{Title.login_title_mm}</span>
        </div>
        <div className="field mt-4">
          <label htmlFor="name" className="block">{Title.login_input_username_label}</label>
          <InputText id="name" className={`block w-full ${failed}`} onChange={ (e) => { setFailed(''); setName(e.target.value)}} />
        </div>
        <div className="field">
          <label htmlFor="password" >{Title.login_input_password_label}</label>
          <Password id="password" className={`w-full ${failed}`} feedback={false} onChange={ (e) => { setFailed('') ;setPassword(e.target.value)}} inputClassName={'w-full'} />
        </div>
        <span className="login-failed-message">{failedMessage}</span>
        <div>
          <Button label={Title.login_submit_button_label} aria-label="Submit"  onClick={ () => onSubmit() } className="w-full login-button"/>
        </div>
      </Card>
    </>
    );
}


export default LoginPage;
import "./Login.css";
import axios from "axios";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import text from "../../config/text.json";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";


const LoginPage = () => {

    const toast = useRef(null);
    const host = 'http://10.20.1.1';
    const [name, setName] = useState('');
    const [failed, setFailed] = useState('');
    const [password, setPassword] = useState('');
    const [failedMessage, setFailedMessage] = useState('');

    const onSubmit =  () => {
        axios.get(`${host}/sanctum/csrf-cookie`).then(
            res => {
                axios.post(`${host}/gold/api/v1/auth/login`, {
                    "name": name,
                    "password": password,
                }).then( 
                    resp => {
                      console.log(resp.data.data);
                      let msg = resp.data.data;
                      toast.current.show({severity:'success', summary: 'Success Message', detail: msg, life: 3000})
                    }
                ).catch(
                    err => {
                        setFailed('p-invalid');
                        setFailedMessage("Incorrect Username or Password. Try again. (အသုံးပြုသူအမည် သို့မဟုတ် လျှို့ဝှက်နံပါတ် မှားယွင်းနေပါသည်။ ပြန်လည်ကြိုးစားကြည့်ပါ။)");
                        console.clear()   
                    }
                )
            }
        );
        
    }

    const header = () => {
      return (
        <div className="grid p-0">
          <div className="col m-0 p-0">
            <div className="login-logo-background">
              <div className="text-center pt-5">
                <Image src="logo.png" alt="Image" width="73" height="80"/>  
              </div>
              <div className="text-center pt-1">
                <span className="login-header-text">{text.login_header}</span>
              </div>          
            </div>
          </div>
        </div>
      );
    }

    return (
    <>
 <div className="grid m-0 p-0">
          <div className="col m-0 p-0">
            <div className="login-logo-background">
              <div className="text-center pt-5">
                <Image src="logo.png" alt="Image" width="73" height="80"/>  
              </div>
              <div className="text-center pt-1">
                <span className="login-header-text">{text.login_header}</span>
              </div>          
            </div>
          </div>
        </div>     
            <Card className="login-card p-0">
              <div className="text-center">
                <span className="login-title-eng">LOGIN</span>
                <br />
                <span className="login-title-mm">(အကောင့်ဝင်ရောက်ခြင်း)</span>
              </div>
              <div className="field mt-4">
                <label htmlFor="name" className="block">{text.login_username}</label>
                <InputText id="name" className={`block w-full ${failed}`} onChange={ (e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="password" >{text.login_password}</label>
                <Password id="password" inputClassName="w-full" className={`${failed}`} feedback={false} onChange={ (e) => setPassword(e.target.value)} style={{width: "100%"}} />
              </div>
              <span className="login-failed-message">{failedMessage}</span>
              <div>
                <Button label={text.login_submit} aria-label="Submit"  onClick={ () => onSubmit() } className="w-full login-button"/>
              </div>
          </Card>
    </>
    );
}


export default LoginPage;
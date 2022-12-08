import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const PasswordPage = () => {
    
    return (
        <div className="grid justify-item-center">
            <div className="col-4 col-offset-4 pt-6">
                <h1>Change Password (လျှို့ဝှက်နံပါတ် ပြောင်းရန်)</h1>

                <div>
                  <Card className='justify-content-between'>
                    <label htmlFor="old_pass" className="block">Type Old Password (လျှို့ဝှက်နံပါတ် အဟောင်းကို ရိုက်ပါ)</label>
                    <InputText id="old_pass" className="block w-full"/>

                    <label htmlFor="old_pass_confirm" className="block">Type New Password (လျှို့ဝှက်နံပါတ် အသစ်ကို ရိုက်ပါ)</label>
                    <InputText id="old_pass" className="block w-full"/>

                    <label htmlFor="new_pass" className="block">Type New Password (လျှို့ဝှက်နံပါတ် အသစ်ကို ရိုက်ပါ)</label>
                    <InputText id="new_pass" className="block w-full"/>
                  </Card>
                </div>

                <div className='mt-4'>
                  <Button label="Change (ပြောင်းမည်)" aria-label="Submit"  className='block w-full' />
                  <Button label="Cancel (မလုပ်တော့ပါ)" aria-label="Submit"  className='block w-full p-button-outlined mt-3' />
                </div>
            </div>
        </div>
    );
}

export default PasswordPage;
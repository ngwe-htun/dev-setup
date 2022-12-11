
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useState } from 'react';
import MenuBarComponent from '../../../components/menubar/MenuBarComponent';
import axios from 'axios';

const roles = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

const data = [
    {"username": "Mg Mg", "created_date": "12"},
    {"username": "Mg Mg", "created_date": "12"},
    {"username": "Mg Mg", "created_date": "12"},
    {"username": "Mg Mg", "created_date": "12"}
];

const UserPage = () => {

    const host = 'http://10.20.0.1';
    const [role, setRole] = useState({});
    const [roles, setRoles] = useState([]);
    const [displayCreate, setDisplayCreate] = useState(false);

    const getRole = () => {
        console.log('hello world')
        axios.get(`${host}/gold/api/v1/auth/roles`).then(
            res => {
                let result = [];
                for(var i in res.data.data) {
                    result.push({
                        'name': res.data.data[i]
                    })
                }        
                console.log(result)
            setRoles(result)
        }).catch(err => console.log(err))
    };

    const onRoleChange = (e) => {
        console.log(e.value)
        setRole(e.value)
    }

    const dialogFooter = () => {
        return (
            <div>
                <Button label="မလုပ်တော့ပါ" icon="pi pi-times" className="p-button-text" onClick={ () => {setDisplayCreate(false) }}/>
                <Button label="ထပ်ပေါင်းထည့်မည်" icon="pi pi-check"  autoFocus />
            </div>
        );
    }

    return (
        <>
        <MenuBarComponent />
        <div className='grid p-7'>
            <div className='col'><span  className='text-xl'>Manage Users (အသုံးပြုသူများကို စီမံရန်)</span></div>
            <div className='col text-right'><Button label="အသုံးပြုသူ ထပ်ပေါင်းထည့်မည်" icon="pi pi-plus"  onClick={ () => { getRole(); setDisplayCreate(true);}} /></div>
        </div>
        <div className="grid">

            <div className="col p-7">
            <div className="card">
                    <DataTable value={data} responsiveLayout="scroll">
                        <Column field="username" header="Username"></Column>
                        <Column field="created_date" header="Created Date"></Column>
                        <Column header="Actions (လုပ်ဆောင်ချက်များ)" body={<Button label="Reset Password (လျှို့ဝှက်နံပါတ် ပြန်လည်သတ်မှတ်မည်)" className="p-button-outlined p-button-sm" />}></Column>
                    </DataTable>

                </div>
            </div>
        </div>

        {/** Dialog */}
        <Dialog header="Add User (အသုံးပြုသူ ထပ်ပေါင်းထည့်ရန်)" style={{ width: '30vw' }} footer={dialogFooter} visible={displayCreate} onHide={ ()=> { setDisplayCreate(false) } }>
            <div className='field'>
            <label htmlFor="username2" className="block">Username</label>
            <InputText id="username2" aria-describedby="username2-help" className="block" style={{width: '100%'}} />
            </div>
            <div className='field pt-2'>
              <label htmlFor="role" className="block">Select Role (ခွင့်ပြုချက်အဆင့် ရွေးပါ)</label>
              <Dropdown value={role} options={roles} optionLabel='name' className='w-full' onChange={(e) => onRoleChange(e)} />
            </div>
        </Dialog>
        </>
    );
}


export default UserPage;
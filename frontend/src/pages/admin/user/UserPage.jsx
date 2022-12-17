
import { useState } from 'react';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Title } from '../../../config/title';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { getUserRoles } from '../../../services/RoleService';
import DialogComponent from '../../../components/DialogComponent';
import { createUser, getUserList, resetUserPassword } from '../../../services/UserService';

const data = [
    {"id": 1, "username": "Mg Mg", "created_date": "12"},
    {"id": 2, "username": "Mg Mg", "created_date": "12"},
    {"id": 3,"username": "Mg Mg", "created_date": "12"},
    {"id": 4, "username": "Mg Mg", "created_date": "12"}
];

/** User manage page */
const UserPage = () => {

    const [user, setUser] = useState('');
    const [userId, setUserId] = useState(null);
    const [role, setRole] = useState({});
    const [roles, setRoles] = useState([]);
    const [displayCreate, setDisplayCreate] = useState(false);
    const [alertDialog, setAlertDialog] = useState(false);
    const [dialogBody, setDialogBody] = useState(null);
    const [dialogHeader, setDialogHeader] = useState(null);
    const [showResetPass, setShowResetPass] = useState(false);

    // Retrieve roles
    const retrieveRoles = async () => {
        let userRoles = await getUserRoles();
        setRoles(userRoles)
    }

    const successDialogBody = (data) =>  {
        return (
            <>
              <div>
                <p>{Title.user_add_user_success_title}</p>
              </div>
              <div>
                <h5>Username: {data.data.name}</h5>
              </div>
              <div>
                <h5>Password: {data.data.password}</h5>
              </div>
            </>
        );
    }

    const successResetDialogBody = (newPass) => {
        console.log(newPass)
        return (
            <>
              <p>{Title.user_reset_pass_success_message}</p>
              <p>{Title.user_reset_pass_new_pass} : {newPass}</p>
            </>
        );
    }

    // Add user
    const addUser = async () => {
        let userData = {
            'name': user
        } 
        try {
            let res = await createUser(userData)
            setDisplayCreate(false);
            setDialogHeader(Title.user_add_user_success_dialog_header);
            setDialogBody(successDialogBody(res))
            setAlertDialog(true)
        } catch(err) {
            console.log(err.message)
        }
    }

    // Reset pass
    const resetUserPass = async () => {
        try {
            let res = await resetUserPassword(userId)
            setShowResetPass(false);
            setDialogHeader(Title.user_add_user_success_dialog_header)
            setDialogBody(successResetDialogBody(res.password))
            setAlertDialog(true)
        } catch (err) {
            console.log(err)
        }
    }

    // OnChange role
    const onRoleChange = (e) => {
        setRole(e.value)
    }

    const resetPassFooter = () => {
        return (
            <div>
                <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => { setShowResetPass(false) }}/>
                <Button label={Title.user_reset_pass_alert_yes} icon="pi pi-check"  autoFocus onClick={ () => resetUserPass() } />
            </div>
        );
    }

    // Create dialog footer
    const createDialogFooter = () => {
        return (
            <div>
                <Button label={Title.user_add_confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => { setDisplayCreate(false) }}/>
                <Button label={Title.user_add_confirm_yes} icon="pi pi-check"  autoFocus onClick={ () => addUser() } />
            </div>
        );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <Button label={Title.user_reset_password} className="p-button-outlined p-button-sm" onClick={ () => { setUserId(rowData.id); setShowResetPass(true)}} />
        );
    }

    return (
        <>
        {/** Title */}
        <div className='grid p-7'>
            <div className='col'><span  className='text-xl'>{Title.manage_user_title}</span></div>
            <div className='col text-right'><Button label={Title.manage_user_add_user_button_label} icon="pi pi-plus"  onClick={ () => {  retrieveRoles() ;setDisplayCreate(true);}} /></div>
        </div>

        {/** Data table */}
        <div className="grid pl-7 pr-7">
            <div className="col">
              <div className="card">
                <DataTable value={data} responsiveLayout="scroll" showGridlines paginator rows={10} size="small">
                  <Column field="username" header="Username"></Column>
                  <Column field="created_date" header="Created Date"></Column>
                  <Column header={Title.manage_user_data_table_action_header} body={actionBodyTemplate}></Column>
                </DataTable>
              </div>
            </div>
        </div>

        {/** Dialog */}
        <Dialog header={Title.manage_user_data_table_header} style={{ width: '30vw' }} footer={createDialogFooter} visible={displayCreate} onHide={ ()=> { setDisplayCreate(false) } }>
            <div className='field'>
              <label htmlFor="name" className="block">{Title.user_add_user_field_name}</label>
              <InputText id="name" className="block w-full" onChange={ (e) => setUser(e.target.value) } />
            </div>
            <div className='field pt-2'>
              <label htmlFor="role" className="block">{Title.manage_user_data_table_select_role}</label>
              <Dropdown value={role} options={roles} optionLabel='name' className='w-full' onChange={(e) => onRoleChange(e)} />
            </div>
        </Dialog>
        
        {/** Alert dialog */}
        {alertDialog ? <DialogComponent header={dialogHeader} visible={true} body={dialogBody} callback={setAlertDialog} /> : null}
        
        {/** Reset pass dialog */}
        <Dialog header={Title.user_reset_pass_sure} style={{ width: '30vw' }} footer={resetPassFooter} visible={showResetPass} onHide={ ()=> { setDisplayCreate(false) } }>
            {Title.user_reset_pass_body}
        </Dialog>
        </>
    );
}


export default UserPage;
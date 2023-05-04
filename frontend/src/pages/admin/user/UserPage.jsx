
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import { Title } from '../../../config/title';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { getCityList } from '../../../services/CityService';
import { getUserRoles } from '../../../services/RoleService';
import DialogComponent from '../../../components/DialogComponent';
import { assignRole, createUser, getUserList, resetUserPassword } from '../../../services/UserService';

export const cityRole = 'available_cities';

/** User manage page */
const UserPage = () => {
    const [user, setUser] = useState('');
    const [role, setRole] = useState({});
    const [roles, setRoles] = useState([]);
    const [userId, setUserId] = useState(null);
    const [userList, setUserList] = useState([]);
    const [dialogBody, setDialogBody] = useState(null);
    const [alertDialog, setAlertDialog] = useState(false);
    const [dialogHeader, setDialogHeader] = useState(null);
    const [displayCreate, setDisplayCreate] = useState(false);
    const [showResetPass, setShowResetPass] = useState(false);
    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState(null);
    const [isRoleAssign, setIsRoleAssign] = useState(false);

    // Fetch users
    const fetchUserList = async () => {
        try {
            retrieveRoles();
            let res = await getUserList();
            console.log(res)
            setUserList(res);
        } catch (err) {
            console.log(err);
        }
    }

    // Fetch cities 
    const fetchCities = async () => {
        try {
            let res = await getCityList();
            setCities(res);
        } catch (err) {
            console.log(err)
        }
    }

    // Clear form
    const clearForm = () => {
        setUser('');
        setRole('');
        setSelectedCities('');
    }

    useEffect(() => {
        fetchUserList();
    }, [])

    // Add user
    const addUser = async () => { 
        try {
            let res = await createUser(user);
            await assignRole(res.data.id, role, selectedCities);
            setDisplayCreate(false);
            clearForm();
            setDialogHeader(Title.user_add_user_success_dialog_header);
            setDialogBody(successDialogBody(res))
            setAlertDialog(true)
        } catch(err) {
            console.log(err.message)
        }
    }

    const assignUserRole = async () => {
        try {
            let res = await assignRole(userId, role, selectedCities);
            setIsRoleAssign(false);
            clearForm();
            setDialogHeader(Title.manage_user_add_role_success);
            setDialogBody(Title.alert_dialog_failed_header)
            setAlertDialog(true)
        } catch(err) {}
    }

    // OnChange role
    const onRoleChange = (e) => {
        if (e.value.name === cityRole) {
            fetchCities();
        } else {
            setSelectedCities([]);
        }
        setRole(e.value)
    }

    // Retrieve roles
    const retrieveRoles = async () => {
        try {
            let userRoles = await getUserRoles();
            setRoles(userRoles)
        } catch (err) {
            console.log(err);
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

    // Success reset dialog body
    const successResetDialogBody = (newPass) => {
        return (
            <>
              <p>{Title.user_reset_pass_success_message}</p>
              <p>{Title.user_reset_pass_new_pass} : {newPass}</p>
            </>
        );
    }

    // Reset pass footer
    const resetPassFooter = () => {
        return (
            <div>
                <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => { setShowResetPass(false) }}/>
                <Button label={Title.user_reset_pass_alert_yes} icon="pi pi-check"  autoFocus onClick={ () => resetUserPass() } />
            </div>
        );
    }

    const assignroleFooter = () => {
        return (
            <div>
                <Button label={Title.manage_user_add_role_confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => { setIsRoleAssign(false) }}/>
                <Button label={Title.manage_user_add_role_confirm_yes} icon="pi pi-check"  autoFocus onClick={ () => assignUserRole() } />
            </div>
        );
    }


    // Create dialog footer
    const createDialogFooter = () => {
        return (
            <div>
                <Button label={Title.user_add_confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => { setDisplayCreate(false); clearForm(); }}/>
                <Button label={Title.user_add_confirm_yes} icon="pi pi-check" disabled={!(user && role)} autoFocus onClick={ () => addUser() } />
            </div>
        );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
            <Button label={Title.manage_user_add_role} className="p-button-outlined p-button-sm mr-1" onClick={ () => { setUserId(rowData.id); setIsRoleAssign(true)}} />
            <Button label={Title.user_reset_password} className="p-button-outlined p-button-sm" onClick={ () => { setUserId(rowData.id); setShowResetPass(true)}} />
            </>
        );
    }

    return (
        <>
        {/** Title */}
        <div className='grid mt-5'>
            <div className='col'><span  className='text-xl'>{Title.manage_user_title}</span></div>
            <div className='col text-right'><Button label={Title.manage_user_add_user_button_label} icon="pi pi-plus"  onClick={ () => {  retrieveRoles(); setDisplayCreate(true);}} /></div>
        </div>

        {/** Data table */}
        <div className="grid mt-5">
            <div className="col">
              <div className="card">
                <DataTable value={userList} responsiveLayout="scroll" showGridlines paginator rows={10} size="small">
                  <Column field="name" header="Username"></Column>
                  <Column field="created_at" header="Created Date"></Column>
                  <Column header={Title.manage_user_data_table_action_header} body={actionBodyTemplate}></Column>
                </DataTable>
              </div>
            </div>
        </div>

        {/** Dialog */}
        <Dialog header={Title.manage_user_data_table_header} style={{ width: '30vw' }} footer={createDialogFooter} visible={displayCreate} onHide={ ()=> { setDisplayCreate(false); clearForm() } }>
            <div className='field'>
              <label htmlFor="name" className="block">{Title.user_add_user_field_name}</label>
              <InputText id="name" className="block w-full" onChange={ (e) => setUser(e.target.value) } />
            </div>
        </Dialog>
        
        {/** Alert dialog */}
        {alertDialog ? <DialogComponent header={dialogHeader} visible={true} body={dialogBody} callback={setAlertDialog} /> : null}
        
        {/** Reset pass dialog */}
        <Dialog header={Title.user_reset_pass_sure} style={{ width: '30vw' }} footer={resetPassFooter} visible={showResetPass} onHide={ ()=> { setDisplayCreate(false) } }>
            {Title.user_reset_pass_body}
        </Dialog>

        {/** Assign roles */}
        <Dialog header={Title.manage_user_add_role} visible={isRoleAssign} footer={assignroleFooter} style={{ width: '30vw' }} onHide={ () => setIsRoleAssign(false) }>
          <div className='field pt-2'>
            <label htmlFor="role" className="block">{Title.manage_user_data_table_select_role}</label>
              <Dropdown value={role} options={roles} optionLabel='name' className='w-full' onChange={(e) => onRoleChange(e)} />
            </div>
            {role.name !== cityRole ? null : 
              <MultiSelect value={selectedCities} options={cities} optionLabel="display_name" className='w-full' maxSelectedLabels={3} onChange={(e)=> setSelectedCities(e.value)} />
            }
        </Dialog>
        </>
    );
}


export default UserPage;
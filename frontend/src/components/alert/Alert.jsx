import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from "primereact/dialog";
import { Title } from "../../config/title";

export const AlertDialog = ({info, callBack}) => {

    const disableCallback = {
        "show": false,
        "message": ""
    };
    const [visible, setVisible] = useState(info.show ? info.show : false);

    // RENDER
    return (
        <>
            <Dialog
                header={Title.alert_dialog_failed_header}          
                style={{width: '30vw'}}
                visible={info.show}
                footer={
                    <Button label={Title.dialog_alert_yes} autoFocus onClick={ () => { setVisible(false); callBack(disableCallback)} } />
                }
                onHide={ () => { setVisible(false); callBack(disableCallback)}}
            >
                {info.message}
            </Dialog>
        </>
    );
}

import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Title } from '../config/title';


const DialogComponent = (props)  => {

  const [dialogVisible, setDialogVisible] = useState(props.visible ? props.visible : false);
   
  const dialogFooter = () => {
    return (
        <div>
            <Button label={Title.dialog_alert_yes} autoFocus onClick={ () => { setDialogVisible(false); props.callback(false);} } />
        </div>
    );
}

  return (
        <Dialog
          header={props.header}
          style={{width: '30vw'}}
          visible={dialogVisible}
          footer={dialogFooter}
          onHide={ () => { setDialogVisible(false); props.callback(false)}}
          >
            {props.body}
        </Dialog>
    );
}

export default DialogComponent;
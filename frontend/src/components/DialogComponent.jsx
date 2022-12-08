
import { Dialog } from 'primereact/dialog';

const DialogComponent = (props)  => {

    const dialogFooter = () => {}

    return (
        <Dialog
          header={props.header}
          style={{width: '30vw'}}
          footer={dialogFooter}
          >

        </Dialog>
    );
}

export default DialogComponent;
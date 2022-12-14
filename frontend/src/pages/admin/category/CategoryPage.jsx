import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Title } from "../../../config/title";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useEffect, useRef, useState } from "react";
import DialogComponent from "../../../components/DialogComponent";
import { createSubCategory, getCategoryList } from "../../../services/CategoryService";
import { clear } from "@testing-library/user-event/dist/clear";

const CategoryPage = () => {
  
    const toast = useRef(null);
    const [name_en, setNameEn] = useState('');
    const [name_mm, setNameMm] = useState('');
    const [data, setData] = useState();
    const [category, setCategory] = useState('null');
    const [showCategoryAdd, setShowCategoryAdd] = useState(false);
    const [dialogHeader, setDialogHeader] = useState(null);
    const [dialogBody, setDialogBody] = useState(null);
    const [alertDialog, setAlertDialog] = useState(false);


    
    const onChangeCategory = (e) => {
      setCategory(e.value)
      
    }

    useEffect(() => {
      const getData = async () => {
        let res = await getCategoryList()
        setData(res)
      }
      getData()
    }, []);

    const successDialogBody = () => {
      return (
          <>
            <p>{Title.user_add_user_success_dialog_header}</p>
          </>
      );
  }

    const clear = () => {
      setNameEn('');
      setNameMm('');
      setCategory(null)
    }

    const addSubCategory = async () => {
      try {
        let res = await createSubCategory(category.id, {
          "name_en": name_en,
          "name_mm": name_mm
        });
        setShowCategoryAdd(false)
        setDialogHeader(Title.user_add_user_success_dialog_header)
        setDialogBody(successDialogBody())
        setAlertDialog(true);
        clear()
      } catch (err) {

      }

    }

    const addCategoryDialogFooter = () => {
      return (
        <div>
          <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" onClick={ () => setShowCategoryAdd(false) } />
          <Button label={Title.cat_add_confirm_yes} icon="pi pi-check"  autoFocus onClick={ () => addSubCategory() } />
        </div>
      );
    }

    return (
        <>
          <div className="grid p-7">
            <div className="col">
                <h1>{Title.cat_header}</h1>
            </div>
            <div className="col text-right">
              <Button label={Title.cat_add_cat_button_title} icon="pi pi-plus" onClick={ () => setShowCategoryAdd(true) } />
            </div>
          </div>

          {/** Add category dialog */}
          <Dialog header={Title.cat_add_cat_button_title} style={{ width: '30vw' }} footer={addCategoryDialogFooter} visible={showCategoryAdd} onHide={ ()=> { setShowCategoryAdd(false) } }>
            <div className='field pt-2'>
              <label htmlFor="category" className="block">{Title.cat_select_category}</label>
              <Dropdown value={category} options={data} optionLabel='name_mm' className='w-full' onChange={ (e) => setCategory(e.value) }/>
            </div>
            <div className='field pt-2'>
              <label htmlFor="name_en" className="block">{Title.cat_sub_cat_name_en}</label>
              <InputText id="name_en" className="block w-full" value={name_en} onChange={ (e) => { setNameEn(e.target.value) } } />
            </div>
            <div className='field pt-2'>
              <label htmlFor="name_mm" className="block">{Title.cat_sub_cat_name_mm}</label>
              <InputText id="name_mm" className="block w-full" value={name_mm} onChange={ (e) => { setNameMm(e.target.value) } } />
            </div>
            
        </Dialog>


        {/** Alert dialog */}
        {alertDialog ? <DialogComponent header={dialogHeader} visible={true} body={dialogBody} callback={setAlertDialog} /> : null}
        
        </>
    );
}

export default CategoryPage;
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Title } from "../../../config/title";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useEffect, useRef, useState } from "react";
import DialogComponent from "../../../components/DialogComponent";
import { createSubCategory, getCategoryList, getSubCategories } from "../../../services/CategoryService";
import "../../../common/common.css";
import { DataTable } from 'primereact/datatable';
import { Column } from "primereact/column";

// Category page
const CategoryPage = () => {
  
    const [data, setData] = useState();
    const [name_en, setNameEn] = useState('');
    const [name_mm, setNameMm] = useState('');
    const [category, setCategory] = useState('null');
    const [dialogBody, setDialogBody] = useState(null);
    const [alertDialog, setAlertDialog] = useState(false);
    const [dialogHeader, setDialogHeader] = useState(null);
    const [showCategoryAdd, setShowCategoryAdd] = useState(false);
    const [filter, setFilter] = useState('');
    const [filterList, setFilterList] = useState([]);


    
    const onChangeCategory = (e) => {
      setCategory(e.value)
      
    }

    useEffect(() => {
      const getData = async () => {
        let res = await getCategoryList()
        setData(res)
        setFilter(res[0])
        fetchSubCategories(res[0])
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

    const fetchSubCategories = async (category) => {
      try { 
        let result = [];
        let res = await getSubCategories(category.id);
        for (let i in res) {
          let item = res[i]
          item['category'] = category.name_mm;
          result.push(item)
        }
        setFilterList(result)
      } catch (err) {

      }
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
        fetchSubCategories(category)
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
          <div className="grid pt-3">
            <div className="col">
                <h2>{Title.cat_header}</h2>
            </div>
            <div className="col text-right">
              <Button label={Title.cat_add_cat_button_title} icon="pi pi-plus" onClick={ () => setShowCategoryAdd(true) } className="button-size" />
            </div>
          </div>

          {/** Select category */}
          <div className="grid">
            <div className="col-3">
              <div className="field w-full">
                <label htmlFor="category_filter">{Title.cat_select_category}</label>
                <Dropdown options={data} value={filter} optionLabel='name_mm' id="category_filter"  className="w-16rem" 
                  onChange={ (e) => { setFilter(e.value); fetchSubCategories(e.value) } }   
                />
              </div>
            </div>
          </div>

          {/** Data table */}
          <div className="grid">
            <div className="col">
              <DataTable 
                value={filterList}
                paginator
                rows={10}
                rowsPerPageOptions={[10,20,30]}
                showGridlines
                emptyMessage={Title.data_table_search_not_found}
              >
                <Column field="name_en" header="Category Name - EN"></Column>
                <Column field="name_mm" header="Category Name - MM"></Column>
                <Column field="category" header="Main Category"></Column>
              </DataTable>
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
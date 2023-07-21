import { Title } from "../../../config/title";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { getCategoryList, getSubCategories} from "../../../services/CategoryService";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { getCityList } from "../../../services/CityService";
import "../../../common/common.css";
import { createItem, getItemLists } from "../../../services/ItemService";
import DialogComponent from "../../../components/DialogComponent";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ItemPage = () => {


  const [city, setCity] = useState({});
  const [lotNo, setLotNo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [isOrder, setIsOrder] = useState(false);
  const [isAction, setIsAction] = useState(null);
  const [subCategory, setSubCategory] = useState();
  const [mainCategory, setMainCategory] = useState({});
  const [availableDate, setAvailableDate] = useState(null);
  const [visableCreate, setVisibleCreate] = useState(false);
  const [subCategoryList, setSubCategoryList] = useState(null);
  const [mainCategoryList, setMainCategoryList] = useState([]);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  const [alertDialogBody, setAlertDialogBody] = useState(null);
  const [filterCategory, setFilterCategory] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [basePrice, setBasePrice] = useState('');

  async function getSubCategoryList(id)  {
    try { 
      let res = await getSubCategories(id)
      console.log('SUB C' + res);
        setSubCategoryList(res)
    } catch (err) {
    }
  }

  // Get cities
  const getCities = async () => {
    try {
      let res = await getCityList();
      setCityList(res)
    } catch (err) {
      console.log(err)
    }
  }

  // Main category
  useEffect(() => {
    async function getMainCategory () {
      try { 
          let res = await getCategoryList();
          setMainCategoryList(res);
          setFilterCategory(res[0]);
          await getItems(res[0]);
      } catch (err) {
        console.log(err)
      }
    }
    getMainCategory();
  }, []);

  // Get items
  const getItems = async (category) => {
    try {
      let res = await getItemLists(category.id);
      console.log(res);
      setItemList(res);
    } catch (err) {
      console.log(err)
    }
  }

  const successDialog = () => {
    return <div className="text-center">
      <span className="pi pi-check text-green-400 text-8xl"></span>
    </div>;
  }

  // Create item
  const addItem = async () => {
    try {
      let res = createItem(mainCategory, subCategory, city, quantity, availableDate, lotNo, basePrice);
      clear();
      setAlertDialogBody(successDialog);
      setVisibleCreate(false);
      setShowAlertDialog(true);
    } catch (err) {
      console.log(err)
    }
  }
  
  // Check category
  function checkCategory(e=null) {
    let categoryToCheck = e ? e : mainCategory;
    if (categoryToCheck.is_auction) {
      setIsAction(true);
      setIsOrder(false);
    } else {
      getSubCategoryList(categoryToCheck.id);
      setIsOrder(true);
      setIsAction(false);
    }
  }

  const clear = () => {
    setCity('');
    setBasePrice('');
    setLotNo('');
    setIsOrder(false);
    setIsAction(false);
    setSubCategory('');
    setMainCategory('');
    setAvailableDate('');
    setQuantity('');
   }
  
    function auctionDialogBody (id)  {
        return (
            <>
              <div>
                <div className='field pt-4'>
                  <label htmlFor="lot" className="block">{Title.item_add_lot_no_title}</label>
                  <InputText id="lot" value={lotNo} className="block w-full" onChange={ (e) => setLotNo(e.target.value) } />
                </div>
                <div className='field'>
                  <label htmlFor="base_price" className="block">{Title.item_add_base_price}</label>
                  <InputText id="base_price" value={basePrice} className="block w-full" onChange={ (e) => setBasePrice(e.target.value) } />
                </div>
                {/* <div className="field">
                  <label htmlFor="city" className="block">{Title.select_city}</label>
                  <Dropdown id='city' value={city} options={cityList} optionLabel='display_name' className='w-full' onChange={(e) => { setCity(e.value);}} />
                </div> */}
                <div className="field">
                    <label htmlFor="date">{Title.item_available_date_select}</label>
                    <Calendar id="date" value={availableDate} onChange={(e) => setAvailableDate(e.value)} className="w-full" minDate={new Date()} showIcon />
                </div>
              </div>
            </>
        );
    }

    const orderDialogBody = () => {
        return (
            <>
              <div>
                <div className="field pt-4">
                  <label htmlFor="sub" className="block">{Title.item_add_sub_select_title}</label>
                  <Dropdown id='sub' value={subCategory} options={subCategoryList} optionLabel='name_en' className='w-full' onChange={(e) => { setSubCategory(e.value);}} />
                </div>
                <div className="field">
                  <label htmlFor="city" className="block">{Title.select_city}</label>
                  <Dropdown id='city' value={city} options={cityList} optionLabel='display_name' className='w-full' onChange={(e) => { setCity(e.value);}} />
                </div>
                <div className='field'>
                  <label htmlFor="base_price" className="block">{Title.item_add_base_price}</label>
                  <InputText id="base_price" value={basePrice} className="block w-full" onChange={ (e) => setBasePrice(e.target.value) } />
                </div>
                <div className='field'>
                  <label htmlFor="quantity" className="block">{Title.item_add_quantity}</label>
                  <InputText id="quantity" value={quantity} className="block w-full" onChange={ (e) => setQuantity(e.target.value) } />
                </div>
                <div className="field">
                    <label htmlFor="date">{Title.item_available_date_select}</label>
                    <Calendar id="date" value={availableDate} onChange={(e) => setAvailableDate(e.value)} className="w-full" minDate={new Date()} showIcon  />
                </div>
              </div>
            </>
        );
    }

    function auctionDisableUntil ()  {
      return !(mainCategory && lotNo && availableDate);
    }

    function orderDisableUntil () {
      return !(mainCategory && subCategory && city && availableDate && quantity)
    }

    
    function auctionFooter() {
        return (
            <>
              <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" />
              <Button 
                label={Title.user_add_confirm_yes} 
                icon="pi pi-check" 
                autoFocus
                disabled={ isAction ? auctionDisableUntil() : orderDisableUntil() }  
                onClick={ () => { addItem() } } />
            </>
        );
    }

    function stepFooter () {
        return (
        <>
          {/* <div>
            <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" />
            <Button label={Title.item_add_next_title} icon="pi pi-check" autoFocus disabled={!mainCategory} onClick={ () => { checkCategory() } } />
          </div> */}
        </>
    );
    }

    let footer = null;
    if (isAction || isOrder) {
        footer =  auctionFooter()
    }

    return(
        <>
          <div className="grid pt-3">
            <div className="col">
                <h2>{Title.item_header}</h2>
            </div>
            <div className="col text-right">
              <Button label={Title.item_add_item_title} icon="pi pi-plus" className="button-size" 
                onClick={ () => { 
                  getCities();
                  clear();
                  setVisibleCreate(true);
                }} />
            </div>
          </div>

          {/** Select category */}
          <Dropdown value={filterCategory} options={mainCategoryList} optionLabel='name_mm' className="w-20rem" placeholder="Please select category" onChange={ (e) => { setFilterCategory(e.value); getItems(e.value)} } />

          {/** Data table */}
          <div className="grid mt-5">
            <div className="col">
              <DataTable 
                value={itemList}
                showGridlines
                emptyMessage={Title.data_table_search_not_found}
              >
                <Column field="id" header="ID"></Column>
                <Column field="category.name_mm" header="Main Category" ></Column>
                <Column field="category.parent_category.name_mm" header="Category"></Column>
                <Column field="log_number" header="Lot No"></Column>
                <Column field="base_price" header="Base price"></Column>
                <Column field="qty" header="Quantity"></Column>
                <Column field="available_date" header="Available date" ></Column>
              </DataTable>
            </div>
          </div>


          {/** Create item dialog */}
          <Dialog
            className="w-4"
            header={Title.item_add_item_dialog_title}
            visible={visableCreate}
            footer={footer}
            onHide={()=> {setVisibleCreate(false); clear()}}
          >
            <Dropdown value={mainCategory} options={mainCategoryList} optionLabel='name_mm' className='w-full' onChange={(e) => { clear(); setMainCategory(e.value); checkCategory(e.value); }} />
            { isAction ? auctionDialogBody(mainCategory.id): null }
            { isOrder  ? orderDialogBody(mainCategory.id): null }
          </Dialog>

          {/** Alert dialog */}
          {showAlertDialog ? <DialogComponent header='Success' visible={true} body={alertDialogBody} callback={setShowAlertDialog}/> : null}
        </>
    );
}

export default ItemPage;

import { Title } from "../../../config/title";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { getCategoryList, getSubCategories} from "../../../services/CategoryService";
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import { getCityList } from "../../../services/CityService";

const ItemPage = () => {

    const [lotNo, setLotNo] = useState('');
    const [date1, setDate1] = useState(null);
    let [visableCreate, setVisibleCreate] = useState(false);
    let [mainCategory, setMainCategory] = useState({});
    let [subCategoryList, setSubCategoryList] = useState(null);
    let [mainCategoryList, setMainCategoryList] = useState([]);
    let [createDialogFooter, setCreateDialogFooter] = useState(null);
    let [createDialogBody, setCreateDialogBody] = useState(null);
    let [subCategory, setSubCategory] = useState();
    const [isAction, setIsAction] = useState(null);
    const [cityList, setCityList] = useState([]);
    const [city, setCity] = useState({});
    const [isOrder, setIsOrder] = useState(false); 

    async function getSubCategoryList(id)  {
        try { 
            let res = await getSubCategories(id)
            setSubCategoryList(res)
        } catch (err) {

        }
    }

    const cities = [
        { "name_en": "yangon"},
        { "name_en": "Mandalay"}
    ];

   const clear = () => {
     setIsAction(false);
     setIsOrder(false);
   }

    const getMainCategory = async () => {
        try { 
            let res = await getCategoryList();
            setMainCategoryList(res);
        } catch (err) {}
    }

    function checkCategory() {
        if (mainCategory.is_auction) {
          setIsAction(true);
        } else {
          console.log(mainCategory.id)
          getSubCategoryList(mainCategory.id);
          setIsOrder(true);
        }
    }

    function auctionDialogBody (id)  {
        return (
            <>
              <div>
                <div className='field pt-4'>
                  <label htmlFor="lot" className="block">{Title.item_add_lot_no_title}</label>
                  <InputText id="lot" value={lotNo} className="block w-full" onChange={ (e) => setLotNo(e.target.value) } />
                </div>
                <div className="field">
                  <label htmlFor="city" className="block">{Title.select_city}</label>
                  <Dropdown id='city' value={city} options={cities} optionLabel='name_en' className='w-full' onChange={(e) => { setCity(e.value);}} />
                </div>
                <div className="field">
                    <label htmlFor="date">{Title.item_available_date_select}</label>
                    <Calendar id="date" value={date1} onChange={(e) => setDate1(e.value)} className="w-full" showIcon />
                </div>
              </div>
            </>
        );
    }

    const orderDialogBody = () => {
        console.log(subCategoryList)
        return (
            <>
              <div>
                <div className="field pt-4">
                  <label htmlFor="sub" className="block">{Title.item_add_sub_select_title}</label>
                  <Dropdown id='sub' value={subCategory} options={subCategoryList} optionLabel='name_en' className='w-full' onChange={(e) => { setSubCategory(e.value);}} />
                </div>
                <div className="field">
                  <label htmlFor="city" className="block">{Title.select_city}</label>
                  <Dropdown id='city' value={city} options={cities} optionLabel='name_en' className='w-full' onChange={(e) => { setCity(e.value);}} />
                </div>
                <div className='field pt-4'>
                  <label htmlFor="quantity" className="block">{Title.item_add_quantity}</label>
                  <InputText id="quantity" value={lotNo} className="block w-full" onChange={ (e) => setLotNo(e.target.value) } />
                </div>
                <div className="field">
                    <label htmlFor="date">{Title.item_available_date_select}</label>
                    <Calendar id="date" value={date1} onChange={(e) => setDate1(e.value)} className="w-full" showIcon />
                </div>
              </div>
            </>
        );
    }

    
    function auctionFooter() {
        return (
            <>
              <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" />
              <Button label={Title.user_add_confirm_yes} icon="pi pi-check" autoFocus onClick={ () => { checkCategory() } } />
            </>
        );
    }

    function stepFooter () {
        return (
        <>
          <div>
            <Button label={Title.confirm_no}  icon="pi pi-times" className="p-button-text" />
            <Button label={Title.item_add_next_title} icon="pi pi-check" autoFocus onClick={ () => { checkCategory() } } />
          </div>
        </>
    );
    }

    let footer = stepFooter();
    if (isAction) {
        footer =  auctionFooter()
    } else if (isOrder) {
        footer = auctionFooter()
    }

    return(
        <>
          <div className="grid p-7">
            <div className="col">
                <h2>{Title.item_header}</h2>
            </div>
            <div className="col text-right">
              <Button label={Title.item_add_item_title} icon="pi pi-plus" onClick={ () => { getMainCategory(); setCreateDialogFooter(stepFooter()); setVisibleCreate(true);} } />
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
            <Dropdown value={mainCategory} options={mainCategoryList} optionLabel='name_mm' className='w-full' onChange={(e) => { setMainCategory(e.value);}} />
            { isAction ? auctionDialogBody(mainCategory.id): null }
            { isOrder  ? orderDialogBody(mainCategory.id): null }
          </Dialog>
        </>
    );
}

export default ItemPage;

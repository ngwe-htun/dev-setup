import { useEffect, useState } from "react";
import { Title } from "../../../config/title";
import { Button } from 'primereact/button';
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import "../../../common/common.css"; 
import { CreateBider, getBiderLists, LimitBiderForm } from "../../../services/BiderService";
import DialogComponent from "../../../components/DialogComponent";


const BidderPage = () => {

    // States
    const [showCreate, setShowCreate] = useState(false);
    const [bidderList, setBidderList] = useState([]);
    const [showLimitBidder, setShowLimitBidder] = useState(false);
    const [limitCount, setLimitCount] = useState('');
    const [bider, setBider] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [biderName, setBiderName] = useState('');
    const [biderCountry, setBiderCountry] = useState('');
    const [biderCompany, setBiderCompany] = useState('');

    async function getBiders() {
      try { 
        let res = await getBiderLists();
        setBidderList(res)
      } catch (err) {

      }
    }

    // Bider list
    useEffect(() => {
      getBiders();
    }, []);

    // Limit bider form
    const limit = async () => {
      try {
        let res = await LimitBiderForm({
          "bider_id": bider.id,
          "qty": limitCount
        });
        setShowLimitBidder(false);
      } catch (err) {

      }
    }

    // Add bider
    const addBider = async () => {
      try {
        let res = await CreateBider(regNumber, biderName, biderCompany, biderCountry);
        setShowCreate(false);
        getBiders();
      } catch (err) {
        console.log(err);
      }
    }

    // Datatable action
    const dataTableAction = (rowData) => {
        return (
            <>
              <Button className="p-button-outlined p-button-sm p-button-primary" onClick={ () => {setBider(rowData); setShowLimitBidder(true) }} >{Title.bid_limit_form_title}</Button>
              <Button className="p-button-outlined p-button-sm p-button-danger ml-3 ">{Title.data_table_delete}</Button>
            </>
        );
    }

    // Data table header
    const dataTableHeader = () => {
        return (
            <>
              <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" className="p-button-outlined"  />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
            </div>
            </>
        );
    }

    // Create dialog footer
    const createDialogFooter = () => {
        return (
            <>
              <Button label={Title.confirm_no}  className="p-button-text" />
              <Button label={Title.confirm_yes} autoFocus disabled={!(regNumber && biderName && biderCompany && biderCountry)} onClick={()=> addBider()}/>
            </>
        );
    }

    return (
        <>

          {/** Title */}
          <div className="grid m-0">
            <div className="col-8"><h2>{Title.bid_page_title}</h2></div>
            <div className="col-4 text-right">
              <Button label={Title.bid_add_bidder_button_title} icon="pi pi-plus" className="button-size" onClick={ () => { setShowCreate(true); }} />
            </div>
          </div>

          {/** Data table */}
          <div className="grid m-0">
            <div className="col">
              <div className="card">
                <DataTable
                  showGridlines 
                  paginator 
                  rows={10} 
                  size="small"
                  value={bidderList}
                  //header={dataTableHeader()}
                >
                  <Column field="bider_reg_number" header={Title.bid_data_table_bid_reg}></Column>
                  <Column field="name" header={Title.data_table_name}></Column>
                  <Column field="company" header={Title.data_table_company}></Column>
                  <Column field="country" header={Title.data_table_country}></Column>
                  <Column body={dataTableAction} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
              </div>
            </div>
          </div>

          {/** Limit bider */}
          <Dialog
            closable={false}
            visible={showLimitBidder}
            header={Title.bid_limit_form_header}
            onHide={ () => setShowLimitBidder(false) }
            footer={
              <>
                <Button label={Title.confirm_no}  className="p-button-outlined" onClick={ () => setShowLimitBidder(false) } />
                <Button label={Title.bid_limit_submit_button_title} autoFocus disabled={!limitCount} onClick={ () => limit() } />
              </>
            }>
              <label htmlFor="limit-qty" className="block">{Title.bid_limit_count_title}</label>
              <InputText id="limit-qty" className="w-full" onChange={ (e) => setLimitCount(e.target.value)}></InputText>
            </Dialog>

          {/** Create dialog */}
          { !showCreate ? null : 
            <Dialog
              visible={showCreate}
              header={Title.bid_add_bid_title}
              onHide={ () => setShowCreate(false)}
              footer={createDialogFooter}
              className="w-4"
            >
              <div className="field pt-3">
                <label htmlFor="reg_no" className="block">{Title.bid_add_bid_no}</label>
                <InputText id="reg_no" className="w-full" value={regNumber} onChange={ (e) => { setRegNumber(e.target.value)}} />
              </div>
              <div className="field pt-3">
                <label htmlFor="name" className="block">{Title.bid_add_name}</label>
                <InputText id="name" className="w-full" name="name" value={biderName} onChange={ (e) => setBiderName(e.target.value) } />
              </div>
              <div className="field pt-3">
                <label htmlFor="company" className="block">{Title.bid_add_company}</label>
                <InputText id="company" className="w-full" name="company" value={biderCompany} onChange={ (e) => setBiderCompany(e.target.value) } />
              </div>
              <div className="field pt-3">
                <label htmlFor="country" className="block">{Title.bid_add_country}</label>
                <InputText id="country" name="country" className="w-full" value={biderCountry} onChange={ (e) => setBiderCountry(e.target.value) } />
              </div>
            </Dialog>
          }
        </>
    );
}

export default BidderPage;
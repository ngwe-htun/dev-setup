import { useState } from "react";
import { Title } from "../../../config/title";
import { Button } from 'primereact/button';
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";

const getBidderList = () => {
    return [
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"},
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"},
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"},
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"},
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"},
        { "lot": "AAA000000", "bidder": "BB999999999", "name": "Mg Mg", "company": "CompanyA", "country": "country"}
    ];
}




const BidderPage = () => {

    // States
    const [showCreate, setShowCreate] = useState(false);
    const [bidderList, setBidderList] = useState([]);

    // Datatable action
    const dataTableAction = (rowData) => {
        return (
            <>
              <Button className="p-button-outlined p-button-sm p-button-danger">{Title.data_table_delete}</Button>
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
              <Button label={Title.confirm_yes} autoFocus />
            </>
        );
    }

    return (
        <>

          {/** Title */}
          <div className="grid m-0">
            <div className="col"><h3>{Title.bid_page_title}</h3></div>
            <div className="col text-right">
              <Button label={Title.bid_add_bidder_button_title} icon="pi pi-plus" onClick={ () => { setShowCreate(true); }} />
            </div>
          </div>

          {/** Data table */}
          <div className="grid m-0">
            <div className="col">
              <div className="card">
                <DataTable
                  value={getBidderList()}
                  header={dataTableHeader()}
                  paginator
                  rows={10}
                >
                  <Column field="lot" header={Title.bid_data_table_lot}></Column>
                  <Column field="bidder" header={Title.bid_data_table_bid_reg}></Column>
                  <Column field="name" header={Title.data_table_name}></Column>
                  <Column field="company" header={Title.data_table_company}></Column>
                  <Column field="country" header={Title.data_table_country}></Column>
                  <Column body={dataTableAction} exportable={false} style={{ minWidth: '8rem' }}></Column>
                </DataTable>
              </div>
            </div>
          </div>

          {/** Create dialog */}
          {/* { !showCreate ? null : 
            <Dialog
              visible={showCreate}
              header={Title.bid_add_bid_title}
              onHide={ () => setShowCreate(false)}
              footer={createDialogFooter}
              className="w-4"
            >
              <div className="field pt-3">
                <label htmlFor="bid_no" className="block">{Title.bid_add_bid_no}</label>
                <InputText id="bid_no" className="w-full"/>
              </div>
              <div className="field pt-3">
                <label htmlFor="bid_no" className="block">{Title.bid_add_name}</label>
                <InputText id="bid_no" className="w-full"/>
              </div>
              <div className="field pt-3">
                <label htmlFor="bid_no" className="block">{Title.bid_add_company}</label>
                <InputText id="bid_no" className="w-full"/>
              </div>
              <div className="field pt-3">
                <label htmlFor="bid_no" className="block">{Title.bid_add_country}</label>
                <InputText id="bid_no" className="w-full"/>
              </div>
            </Dialog>
          } */}
        </>
    );
}

export default BidderPage;
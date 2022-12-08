
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { FilterMatchMode, FilterOperator } from 'primereact/api';


const GoldCoinPage = () => {

    const data = [
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" },
        { "city": "Yangon", "type": "1 tical", "date": "2022-12-01", "name": "Aung Aung", "nrc": "12/AhLaNa(C)012345", "phone": "095013591", "income": "1,500,000" }
    ];
    
    return (
        <>
        <div className='grid pl-7 pr-7'>
            <div className='col'>
                <h1>Gold Coin</h1>
            </div>
        </div>
        <div className='grid pl-7 pr-7 pt-3'>
            <div className='col'>
            <div className="card">
                <DataTable value={data} showGridlines 
                  paginator
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={10} rowsPerPageOptions={[10,20,50]}
                  globalFilterFields={['name', 'city']} emptyMessage="No customers found."
                  header={
                    <div className="flex justify-content-end">    
                      <div className="flex align-items-center export-buttons">
                      <Button type="button" label='Download CSV' className="mr-2 p-button-outlined p-button-success" data-pr-tooltip="CSV" />
                      </div>  
                      <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" />
                      </span>
                    </div>
                  }
                >
                    <Column header="City" field="city"></Column>
                    <Column header="Gold Coin Type" field="type"></Column>
                    <Column header="Date" field="date"></Column>
                    <Column header="Buyer’s Name" field="name"></Column>
                    <Column header="NRC" field="nrc"></Column>
                    <Column header="Phone" field="phone"></Column>
                    <Column header="Monthly Income (Ks)" field="income"></Column>
                </DataTable>
            </div>
        </div>
            </div>
        </>
    );
}

export default GoldCoinPage;
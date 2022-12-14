
import { Column } from 'primereact/column';
import { DataTable } from "primereact/datatable";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'; 
import { Title } from '../../../../config/title';

const list = [
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" }
];

export const GoldCoinReport = () => {

    // Body template
    const statusBodyTemplate = (rowData) => {
        return <a href=''>{rowData.name}</a>;
    }

    // Dialog header
    const dataTableHeader = () => {
        return (
            <>
              <div className="flex justify-content-end">
                <Button type="button " label={Title.data_table_download_csv} className="p-button-outlined p-button-success"  />
                <span className="p-input-icon-left ml-3">
                    <i className="pi pi-search" />
                    <InputText placeholder="Keyword Search" />
                </span>
            </div>
            </>
        );
    }

    return (
        <>
          {/** Title */}
          <div className="grid pl-7 pr-7 pt-7">
            <div className="col"><h3>{Title.report_gold_coin_title}</h3></div>
          </div>

          {/**  */}
          <div className="grid p-7">
            <div className="col">
              <div className="card">
              <DataTable
                  value={list}
                  header={dataTableHeader}
                  paginator
                  rows={10}
                >
                  <Column field="name" body={statusBodyTemplate} header={Title.buyer_name}></Column>
                  <Column field="nrc" header={Title.nrc}></Column>
                  <Column field="phone" header={Title.phone}></Column>
                  <Column field="city" header={Title.city}></Column>
                  <Column field="type" header={Title.gold_coin_type}></Column>
                  <Column field="date" header={Title.date}></Column>
                  <Column field="income" header={Title.monthly_income}></Column>
                </DataTable>
              </div>           
            </div>
          </div>
        </>
    );
}
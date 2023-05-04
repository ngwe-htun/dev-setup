import "./Search.css";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { searchCategory, Title } from "../../../config/title";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const SearchPage = () => {
  
  const [keyword, setKeyword] = useState('');
  const [searchCat, setSearchCat] = useState({});

  const retrieveContent = () => {
    console.log('Retrieving', searchCat);
  }

  const list = [
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" },
    { "name": "Aung Aung", "nrc": "12/MaNaNa(C)123456", "phone": "0987654321", "city": "Yangon", "type": "1 tical", "date": "2022-12-12", "income": "150000" }
];

  return (
        <>
          {/** Title */}
          <div className="gird">
            <div className="col p-0">
              <h2>{Title.search_title}</h2>
            </div>
          </div>

          {/** Search contents */}
          <div className="grid mt-4">
            <div className="col-2 w-15rem">
              <Dropdown options={searchCategory} value={searchCat} optionLabel='name' className="w-full" placeholder={Title.search_dropdown_label} id='option' onChange={(e) => setSearchCat(e.value)}/>
            </div>
            <div className="col-3 w-20rem">
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" style={{width: "18rem"}} onChange={ (e)=> setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="col-2">
                <Button label={Title.search_button_label} disabled={!keyword} onClick={ () => retrieveContent() } />
              </div>
            
          </div>

          <DataTable
            value={list}
            paginator
            rows={10}
          >
            <Column field="name" ></Column>
                  <Column field="nrc" header={Title.nrc}></Column>
                  <Column field="phone" header={Title.phone}></Column>
                  <Column field="city" header={Title.city}></Column>
                  <Column field="type" header={Title.gold_coin_type}></Column>
                  <Column field="date" header={Title.date}></Column>
                  <Column field="income" header={Title.monthly_income}></Column>
          </DataTable>
        </>
    );
}

export default SearchPage;
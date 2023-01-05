import "./Search.css";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { searchCategory, Title } from "../../../config/title";

const SearchPage = () => {
  
  const [keyword, setKeyword] = useState('');
  
  return (
        <>
          {/** Title */}
          <div className="gird">
            <div className="col p-0">
              <h2 style={{fontFamily: "Pyidaungsu"}}>{Title.search_title}</h2>
            </div>
          </div>

          {/** Search contents */}
          <div className="grid mt-4">
            <div className="col flex">
              <Dropdown options={searchCategory} optionLabel='name' placeholder="Buyer's Name" id='option'/>
              <div className="flex">
                <span className="p-input-icon-left ml-4">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" style={{width: "18rem"}} onChange={ (e)=> setKeyword(e.target.value)} />
                </span>
              </div>
              <div className="flex ml-4">
                <Button label={Title.search_button_label} disabled={!keyword} />
              </div>
            </div>
          </div>

          {/** Searched content goes here */}
        </>
    );
}

export default SearchPage;
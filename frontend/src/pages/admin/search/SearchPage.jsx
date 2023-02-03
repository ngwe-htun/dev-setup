import "./Search.css";
import { useState } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { searchCategory, Title } from "../../../config/title";

const SearchPage = () => {
  
  const [keyword, setKeyword] = useState('');
  const [searchCat, setSearchCat] = useState({});

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
                <Button label={Title.search_button_label} disabled={!keyword} />
              </div>
            
          </div>

          {/** Searched content goes here */}
        </>
    );
}

export default SearchPage;
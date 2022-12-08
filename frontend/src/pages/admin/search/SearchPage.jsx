
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

const data = [
    { "name": "OK" }
];

const SearchPage = () => {
    return (
        <>
          <div className="grid">
            <div className="col">
              <Dropdown options={data} optionLabel='name' placeholder="Buyer's Name" id='option'/>
              <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value='ok' placeholder="Search" />
                    </span>
            </div>
            <div className="col justify-content-start">
            <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText value='ok' placeholder="Search" />
                    </span>
            </div>
          </div>
        </>
    );
}

export default SearchPage;
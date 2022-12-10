import axios from "axios";
import { Button } from "primereact/button";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Toast } from "primereact/toast";

const CategoryPage = () => {
  
    const toast = useRef(null);
    const [data, setData] = useState();
    const [category, setCategory] = useState('null');
    
    const onChangeCategory = (e) => {
      setCategory(e.value)
      
    }

    useEffect(() => {
      axios.get('http://10.20.1.1/gold/api/v1/category/parent').then(
        res => { console.log(res.data.data); setData(res.data.data); toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
      }
      )
    }, []);

    return (
        <>
          <div className="grid p-7">
          <Toast ref={toast} />
            <div className="col">
                <h1>Category List</h1>
            </div>
            <div className="col text-right">
              <Button label="New Category" icon="pi pi-plus" />
            </div>
          </div>

          <div className="grid">
            <div className="col text-center">
              <Dropdown options={data} optionLabel='name_mm' value={category} id='option' onChange={ onChangeCategory} style={{width: "20vw"}}/>
            </div>
            </div>
        </>
    );
}

export default CategoryPage;
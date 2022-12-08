import { Button } from "primereact/button";

const CategoryPage = () => {
    
    return (
        <>
          <div className="grid p-7">
            <div className="col">
                <h1>Category List</h1>
            </div>
            <div className="col text-right">
              <Button label="New Category" icon="pi pi-plus" />
            </div>
          </div>
        </>
    );
}

export default CategoryPage;
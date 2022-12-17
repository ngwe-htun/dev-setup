import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Title } from "../../../../config/title";

const NonAuctionPage = () => {
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');

    const reports = [
        {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
        {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
        {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
        {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
        {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
        {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
    ]

    // Fetch reports
    const fetchReports = () => {
        try {
            let res = '';
        } catch (err) {}
    }

    return (
        <>
          {/** Title */}
          <div className="grid">
            <div className="col">
                <h2>{Title.report_non_auction_title}</h2>
            </div>
          </div>

          {/** Select Date */}
          <div className="flex">
            <div className="flex w-16rem">
              <p>{Title.start_date}</p>
            </div>
            <div className="flex w-16rem pl-5">
                <p>{Title.end_date}</p>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="flex w-16rem">
              <Calendar className="w-full" dateFormat="yy-mm-dd" onChange={(e) => { setStartDate(e.value)}} />
            </div>
            <div className="flex w-16rem pl-5">
              <Calendar className="w-full" minDate={startDate} dateFormat="yy-mm-dd"  onChange={(e) => { setEndDate(e.value)}} />
            </div>
            <div className="flex pl-5">
              <Button label={Title.submit} disabled={!(startDate && endDate)} onClick={() => {console.log(startDate); console.log(endDate)}}></Button>
            </div>
          </div>
          {/** Data table goes here */}
          <DataTable value={reports} responsiveLayout="scroll" className="pt-5" header={
            <div className="flex justify-content-end">    
              <div className="flex align-items-center export-buttons">
                <Button type="button" label='Download CSV' className="mr-2 p-button-outlined p-button-success" data-pr-tooltip="CSV" />
              </div>  
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
              </span>
            </div>} 
            paginator
            rows={10}
            size="small" 
            showGridlines
            >
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>

        </>
    );
}

export default NonAuctionPage;
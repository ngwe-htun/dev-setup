import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../../config/title";
import { getCategoryList } from "../../../../services/CategoryService";
import { fetchAuctionReport } from "../../../../services/ReportService";

const AuctionReportPage = () => {
    const nav = useNavigate();
    const [data, setData] = useState([]);
    const [type, setType] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [typeLists, setTypeLists] = useState([]);

    const statusBodyTemplate = (rowData) => {
        return <p
            className="p-0"
            style={{
              textDecoration: 'underline',
              color: 'blue',
              cursor: 'pointer'
            }}
            onClick={
              ()=> { 
                nav('/dashboard/report/auction/detail')
              }
            }
          >
            {rowData.id}
          </p>
    }

    useEffect(() => {
        async function getTypes () {
            let res = await getCategoryList();
            let filteredTypes = res.filter(e => e.is_auction === 1)
            setTypeLists(filteredTypes)
        }
        getTypes();
    }, []);

    // FETCH REPORT
    const fetchReports = async () => {
      try {
        let res = await fetchAuctionReport(startDate, endDate);
        setData(res);
      } catch (err) {
        console.log(err);
      }
    }

    return (
        <>
          {/** Title */}
          <div className="grid">
            <div className="col">
                <h2>{Title.report_auction_title}</h2>
            </div>
          </div>

          {/** Select Date */}
          <div className="flex">
          <div className="flex w-16rem">
              <p>{Title.report_auction_select_type}</p>
            </div>
            <div className="flex w-16rem pl-5">
              <p>{Title.start_date}</p>
            </div>
            <div className="flex w-16rem pl-5">
                <p>{Title.end_date}</p>
            </div>
          </div>
          <div className="flex pt-0">
            <div className="flex w-16rem">
                <Dropdown value={type} options={typeLists} optionLabel='name_mm' className="w-full" onChange={ (e) => {setType(e.value)} } ></Dropdown>
            </div>
            <div className="flex w-16rem pl-5">
              <Calendar className="w-full" dateFormat="yy-mm-dd" onChange={(e) => { setStartDate(e.value)}} />
            </div>
            <div className="flex w-16rem pl-5">
              <Calendar className="w-full" minDate={startDate} dateFormat="yy-mm-dd"  onChange={(e) => { setEndDate(e.value)}} />
            </div>
            <div className="flex pl-5">
              <Button label={Title.submit} disabled={!(startDate && endDate && type)} onClick={() => {fetchReports()}}></Button>
            </div>
          </div>

          {/** Data table goes here */}
          <DataTable value={data} responsiveLayout="scroll" className="pt-5" header={
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
            rows={20}
            size="small"
            showGridlines
            >
            <Column field="id" header="ID" body={statusBodyTemplate}></Column>
            <Column field="bider_id" header="Bider ID"></Column>
            <Column field="category.name_mm" header="Category"></Column>
            <Column field="log_number" header="Lot No"></Column>
            <Column field="biding_price" header="Price"></Column>
            <Column field="biding_price_text" header="Price In Word"></Column>
            <Column field="created_at" header="Bid date"></Column>
        </DataTable>
        </>
    );
}


export default AuctionReportPage;
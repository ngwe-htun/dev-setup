import './App.css';
import React from 'react';
import "primeicons/primeicons.css"; 
import { Button } from 'primereact/button';
import {Menu} from 'primereact/menu';
import {Menubar} from 'primereact/menubar';
import {InputText} from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import 'primeflex/primeflex.css';

const citySelectItems = [
  {label: 'New York', value: 'NY'},
  {label: 'Rome', value: 'RM'},
  {label: 'London', value: 'LDN'},
  {label: 'Istanbul', value: 'IST'},
  {label: 'Paris', value: 'PRS'}
];


let items = [
  {label: 'New'},
  {label: 'Delete'}
];


function App() {

  return (
    <>
     <div className='grid'>
      <div className='col '>
        <Menubar 
        //model={items}
          start={<Image src="gold.png" alt="Image Text" className='p-7'/>}
          />
      <Menu 
      model={items}
      style={{height: '100vh', MarginLeft: '0px'}}
      className='p-7'
      />
      </div>
      </div>
    </>
    
  );
}

export default App;

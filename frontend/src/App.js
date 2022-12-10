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
import UserPage from './pages/admin/user/UserPage';
import GoldCoinPage from './pages/admin/goldcoin/GoldCoinPage';
import CategoryPage from './pages/admin/category/CategoryPage';
import SearchPage from './pages/admin/search/SearchPage';
import PasswordPage from './pages/admin/password/PasswordPage';
import LoginPage from './pages/login/LoginPage';
import MenuBarComponent from './components/menubar/MenuBarComponent';

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
    <UserPage />
    // <GoldCoinPage />
    //<CategoryPage />
    // <SearchPage />
    // <PasswordPage />
    // // <LoginPage />
    // <MenuBarComponent />
    
  );
}

export default App;

import './App.css';
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/layout';
import Contact from './pages/contact';
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<>hello</>} />
        <Route path="test" element={<Layout />}>
          <Route path="home/ok" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;

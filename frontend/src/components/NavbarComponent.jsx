import './Navbar/Navbar.css';
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <>
      <Navbar bg="primary" variant="dark" className='navbar-size'>
        <Container fluid>
          <Navbar.Brand className='text-light'>
            <img
              alt=""
              src="logo.png"
              className="d-inline-block align-middle dashboard-logo"
            />{' '}
            <span className='dashboard-logo-text align-middle'>MONREC</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown title="Kyaw Kyaw">
                <NavDropdown.Item href="#action/3.1">Change Password <br /> (လျှို့ဝှက်နံပါတ်ပြောင်းမည်)</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Manage Users <br />(အသုံးပြုသူများကို စီမံမည်)</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout (ထွက်မည်)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default NavbarComponent;
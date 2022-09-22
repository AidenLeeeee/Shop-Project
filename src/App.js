import { Container, Button, Navbar, Nav } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">S-Neakrz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Women">Women</Nav.Link>
            <Nav.Link href="#Men">Men</Nav.Link>
            <Nav.Link href="#Kids">Kids</Nav.Link>
            <Nav.Link href="#Brands">Brands</Nav.Link>
            <Nav.Link href="#Your-Offers">Your Offers</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/img/shoe1.png"}
              alt="shoe1"
              width="80%"
            />
            <h4>Product Name</h4>
            <p>Context</p>
          </div>
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/img/shoe2.png"}
              alt="shoe2"
              width="80%"
            />
            <h4>Product Name</h4>
            <p>Context</p>
          </div>
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/img/shoe3.png"}
              alt="shoe3"
              width="80%"
            />
            <h4>Product Name</h4>
            <p>Context</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

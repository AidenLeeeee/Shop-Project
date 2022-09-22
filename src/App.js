import { useState } from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import shoes from "./data";
import CardComponent from "./components/CardComponent";
import "./App.css";

function App() {
  let [products, setProducts] = useState(shoes);

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
          {products.map((product, i) => {
            return <CardComponent product={product} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

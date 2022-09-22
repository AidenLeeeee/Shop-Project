import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import shoes from "./data";
import MainComponent from "./components/MainComponent";
import EventComponent from "./components/EventComponent";
import DetailComponent from "./components/DetailComponent";

function App() {
  let [products, setProducts] = useState(shoes);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            className="navbar-brand"
          >
            S-Neakrz
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/women");
              }}
            >
              Women
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/men");
              }}
            >
              Men
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/kids");
              }}
            >
              Kids
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <MainComponent products={products} setProducts={setProducts} />
          }
        />
        <Route
          path="/detail/:id"
          element={<DetailComponent products={products} />}
        />
        <Route path="/event" element={<EventComponent />}>
          <Route path="one" element={<p>New Markdowns: Up to 40% Off</p>} />
          <Route
            path="two"
            element={<p>S-Neakrz URBAN LIFESTYLE & CULTURE EVENT</p>}
          />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

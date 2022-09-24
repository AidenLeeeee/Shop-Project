import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import shoes from "./data";
import MainComponent from "./components/MainComponent";
import EventComponent from "./components/EventComponent";
import DetailComponent from "./components/DetailComponent";
import MyCartComponent from "./components/MyCartComponent";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

function App() {
  let [products, setProducts] = useState(shoes);
  let navigate = useNavigate();

  let result = useQuery(["작명"], () => {
    return axios
      .get("https://codingapple1.github.io/userdata.json")
      .then((res) => {
        return res.data;
      });
  });

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
            <Nav.Link
              onClick={() => {
                navigate("/my-cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto user-box">
            <FontAwesomeIcon icon={faUserShield} className="user-box-icon" />{" "}
            {result.isLoading ? (
              "Loading..."
            ) : (
              <strong>{result.data.name}</strong>
            )}
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
        <Route path="/my-cart" element={<MyCartComponent />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

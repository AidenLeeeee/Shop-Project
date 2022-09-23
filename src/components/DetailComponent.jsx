import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function DetailComponent(props) {
  const { id } = useParams();
  const product = props.products.find((product) => product.id === Number(id));
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade("fade-in-end");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, []);

  return (
    <div className={"container fade-in-start " + fade}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/img/shoe" + id + ".png"}
            alt="shoe"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h2 className="pt-5">{product.brand}</h2>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>${product.price}</p>
          <button className="btn btn-danger">Add to Bag</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            button0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            button2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  return (
    <div>
      {[<div>Content0</div>, <div>Content1</div>, <div>Content2</div>][tab]}
    </div>
  );
}

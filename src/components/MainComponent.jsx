import CardComponent from "./CardComponent";
import axios from "axios";

export default function MainComponent(props) {
  const products = props.products;
  const setProducts = props.setProducts;
  return (
    <>
      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {products.map((product, i) => {
            return <CardComponent product={product} key={i} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((res) => {
              const copyProducts = [...products, ...res.data];
              setProducts(copyProducts);
            })
            .catch(() => {
              console.log("Failed");
            });
        }}
      >
        More
      </button>
    </>
  );
}

import CardComponent from "./CardComponent";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #fff;
  color: grey;
  padding: 10px;
  margin: 20px 0px;
  border: 1px solid #c1c1c1;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  &:hover {
    border-color: #000;
    color: #000;
  }
`;

let moreBtnCount = 0;
let showBtn = true;
let loading = false;

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
      {showBtn ? (
        <StyledButton onClick={loadMoreProducts}>Show more</StyledButton>
      ) : null}
      {loading ? <StyledButton>loading...</StyledButton> : null}
    </>
  );

  function loadMoreProducts() {
    if (moreBtnCount === 0) {
      axiosRequest(moreBtnCount + 2);
    } else if (moreBtnCount === 1) {
      showBtn = false;
      axiosRequest(moreBtnCount + 2);
    } else {
      return null;
    }
  }

  function axiosRequest(fileNum) {
    axios
      .get("https://codingapple1.github.io/shop/data" + fileNum + ".json")
      .then((res) => {
        loading = true;
        const copyProducts = [...products, ...res.data];
        setProducts(copyProducts);
        moreBtnCount += 1;
        loading = false;
      })
      .catch(() => {
        loading = false;
        console.log("Connection Failed.");
      });
  }
}

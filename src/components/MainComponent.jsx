import CardComponent from "./CardComponent";

export default function MainComponent(props) {
  const products = props.products;
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
    </>
  );
}

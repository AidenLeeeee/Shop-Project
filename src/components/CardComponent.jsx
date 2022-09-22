export default function CardComponent(props) {
  const product = props.product;
  const id = props.product.id;
  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + "/img/shoe" + (id + 1) + ".png"}
        alt="shoe"
        width="80%"
      />
      <h4>{product.title}</h4>
      <p>{product.brand}</p>
      <p>USD {product.price}</p>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function CardComponent(props) {
  const navigate = useNavigate();
  const product = props.product;
  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + "/img/shoe" + product.id + ".png"}
        alt="shoe"
        width="80%"
        onClick={moveToDetail}
      />
      <h4 onClick={moveToDetail}>{product.title}</h4>
      <p>{product.brand}</p>
      <p>${product.price}</p>
    </div>
  );

  function moveToDetail() {
    navigate("/detail/" + product.id);
  }
}

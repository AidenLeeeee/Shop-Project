import { useParams } from "react-router-dom";

export default function DetailComponent(props) {
  const { id } = useParams();
  const product = props.products.find((product) => product.id === Number(id));

  return (
    <div className="container">
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
    </div>
  );
}

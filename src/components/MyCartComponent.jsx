import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from "../store";

export default function MyCartComponent() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        {user.name}'s Cart age: {user.age}
      </h1>
      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        Age+1
      </button>
      <Table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            return (
              <CartItemComponent item={item} dispatch={dispatch} key={i} />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

function CartItemComponent({ item, dispatch }) {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
      <td>
        <button
          onClick={() => {
            dispatch(changeName());
          }}
        >
          +
        </button>
      </td>
    </tr>
  );
}

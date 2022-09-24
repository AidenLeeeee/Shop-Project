import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store";
import styled from "styled-components";

export default function MyCartComponent() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
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
      <td>
        <div className="cart-box">{item.id}</div>
      </td>
      <td>
        <div className="cart-box">{item.name}</div>
      </td>
      <td>
        <div className="cart-box">
          <StyledButton
            disabled={item.count === 1}
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            -
          </StyledButton>
          {item.count}
          <StyledButton onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </StyledButton>
        </div>
      </td>
      <td>
        <div className="cart-box">
          <button>+</button>
        </div>
      </td>
    </tr>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  position: absolute;
  &:hover {
    background-color: grey;
  }
  &:first-child {
    left: 50px;
  }
  &:last-child {
    right: 50px;
  }
`;

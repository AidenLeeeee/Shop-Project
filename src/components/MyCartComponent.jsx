import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, deleteCart } from "../store";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
            <th></th>
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
      <td width="25%">
        <div className="cart-box">{item.id}</div>
      </td>
      <td width="25%">
        <div className="cart-box">{item.name}</div>
      </td>
      <td width="25%">
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
      <td width="25%">
        <div className="cart-box">
          <button
            className="cart-delete-btn"
            onClick={() => dispatch(deleteCart(item.id))}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
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
  &:hover {
    background-color: grey;
  }
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-left: 20px;
  }
`;

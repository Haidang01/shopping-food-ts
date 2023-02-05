import React from "react";
import "../../../styles/cartItem.css";
import productImg from "../../../assets/images/product_01.1.jpg";
import { ListGroupItem } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { GrFormSubtract } from "react-icons/gr";
import {
  ICartProduct,
  addItem,
  deleteProduct,
  removerItem,
} from "../../../redux/features/cartSlice";
import { useAppDispatch } from "../../../redux/store";
type Props = {
  item: ICartProduct;
};
const CartItem = ({ item }: Props) => {
  const { id, title, image01, totalPrice, quantity } = item;
  const dispatch = useAppDispatch();
  const increaseProduct = () => {
    dispatch(addItem(item));
  };
  const decreaseProduct = () => {
    dispatch(removerItem(id));
  };
  const deleteProducts = () => {
    dispatch(deleteProduct(id));
  };
  return (
    <ListGroupItem className="border-0">
      <div className="cartItem-info d-flex gap-3">
        <img
          src={image01}
          alt=""
        />
        <div className="cartProduct-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div className="">
            <h6 className="product-title">{title}</h6>
            <p className="d-flex align-items-center gap-5 cartProduct-price ">
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between increase-decrease-btn">
              <span
                className="d-flex increase-btn"
                onClick={increaseProduct}
              >
                <HiPlusSm />
              </span>
              <span className="quantity">{quantity}</span>
              <span
                className="d-flex decrease-btn"
                onClick={decreaseProduct}
              >
                <GrFormSubtract />
              </span>
            </div>
          </div>
          <span
            className="delete-btn"
            onClick={deleteProducts}
          >
            <IoMdClose />
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;

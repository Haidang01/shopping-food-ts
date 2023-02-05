import React from "react";
import productImg from "../../../assets/images/product_2.1.jpg";
import { Link } from "react-router-dom";
import { IProduct } from "../../../assets/fake-data/products";
import { useAppDispatch } from "../../../redux/store";
import { addItem } from "../../../redux/features/cartSlice";
type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const { id, image01, price, title } = product;
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(addItem(product));
  };
  return (
    <div className="product-item">
      <div className="product-img">
        <Link to={`/foods/${id}`}>
          <img
            src={image01}
            className="w-50"
            alt=""
          />
        </Link>
        <div className="product-content">
          <Link to={`/foods/${id}`}>
            <h5>{title}</h5>
          </Link>
          <div className="d-flex justify-content-between px-2 align-items-center">
            <span className="product-price">${price}</span>
            <button
              className="product-btn"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

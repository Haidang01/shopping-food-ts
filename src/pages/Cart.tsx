import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/cart-page.css";
import { MdDelete } from "react-icons/md";
import { IProduct } from "../assets/fake-data/products";
import { ICartProduct, deleteProduct } from "../redux/features/cartSlice";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { Link } from "react-router-dom";
type Props = {};

const Cart = (props: Props) => {
  const { totalAmount } = useAppSelector((state) => state.rootReducer.cart);
  const dispatch = useAppDispatch();
  const hanldeDelete = (id: string) => {
    dispatch(deleteProduct(id));
  };
  const { cartProducts } = useAppSelector((state) => state.rootReducer.cart);
  return (
    <Helmet title="">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartProducts.length === 0 ? (
                <h5 className="text-danger text-center mb-3">
                  Your cart is empty
                </h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">Image</th>
                      <th className="text-center">Product title</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((item) => (
                      <tr key={item.id}>
                        <td className="text-center">
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              objectFit: "cover",
                            }}
                            src={item.image01}
                            alt=""
                          />
                        </td>
                        <td className="text-center">{item.title}</td>
                        <td className="text-center text-danger fw-bold">
                          ${item.price}
                        </td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="deleteSp">
                          <MdDelete onClick={() => hanldeDelete(item.id)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="mt-3">
                <h6 className="text-danger fs-3 ">
                  Subtotal: <span>${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout </p>
                <div className="d-flex gap-3">
                  <Link to={"/foods"}>
                    <button className="product-btn">Continue Shopping</button>
                  </Link>
                  <Link to={"#"}>
                    <button className="product-btn">Proceed to checkout</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
export default Cart;

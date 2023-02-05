import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Col, Row } from "react-bootstrap";
import ImgItem from "../assets/images/product_01.1.jpg";
import "../styles/details-product.css";
import { useParams } from "react-router-dom";
import products, { IProduct } from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { addItem } from "../redux/features/cartSlice";
type Props = {};
const FoodDetails = (props: Props) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);
  const [previewImage, setPreviewImg] = useState<string | undefined>(
    product?.image01
  );
  const relatedProduct = products.filter(
    (item) => item.category === product?.category
  );
  useEffect(() => {
    setPreviewImg(product?.image01);
  }, [product]);

  const dispatch = useAppDispatch();
  const addToCart = () => {
    if (!product) return;
    dispatch(addItem(product));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title="Product-details">
      <CommonSection title={product?.title} />
      <section>
        <Container>
          <Row>
            <Col
              lg="2"
              md="2"
            >
              <div className="product-img">
                <div
                  className="img-item mt-2"
                  onClick={() => setPreviewImg(product?.image01)}
                >
                  <img
                    src={product?.image01}
                    alt=""
                    className="w-50"
                  />
                </div>
                <div
                  className="img-item my-3"
                  onClick={() => setPreviewImg(product?.image02)}
                >
                  <img
                    src={product?.image02}
                    alt=""
                    className="w-50"
                  />
                </div>
                <div
                  className="img-item"
                  onClick={() => setPreviewImg(product?.image03)}
                >
                  <img
                    src={product?.image03}
                    className="w-50"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col
              lg="4"
              md="4"
            >
              <div className="product-imgMain">
                <img
                  src={previewImage}
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
            <Col
              lg="6"
              md="6"
            >
              <div className="product-contents">
                <h2 className="product-titles mb-3">{product?.title}</h2>
                <span className="product-price">
                  Price:
                  <span className="text-danger fs-5 fw-bolder">
                    {" "}
                    ${product?.price}
                  </span>
                </span>
                <p className=" category mb-5 mt-2">
                  Category: <span>{product?.category}</span>
                </p>
                <button
                  className="product-btn"
                  onClick={addToCart}
                >
                  Add to cart
                </button>
              </div>
            </Col>
            <Col
              lg="12"
              className="mt-4"
            >
              <div className="tabs d-flex align-items-center gap-3 py-3">
                <h6 className="tab-active">Description</h6>
                <h6>Review</h6>
              </div>
              <div className="tab-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  rem corrupti ullam iste illum dolor vitae, aut suscipit
                  excepturi, est consequuntur ipsum quasi natus a in non id
                  itaque quo! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Id fuga nihil minima aperiam corporis dolore asperiores
                  eius nesciunt neque, accusantium ipsum molestias minus,
                  tempore nam, sed officia. Impedit, necessitatibus culpa.
                </p>
              </div>
              <div className="tab-form mb-5">
                <form
                  action=""
                  className="form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      rows={5}
                      placeholder="Enter your name"
                    />
                  </div>
                  <button
                    type="submit"
                    className="product-btn"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Col>
            <Col
              lg="12"
              className="my-5"
            >
              <h2>You might also like</h2>
            </Col>
            {relatedProduct.map((product) => (
              <Col
                lg="3"
                md="4"
                xs="6"
                key={product.id}
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;

import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
type Props = {};
import "../styles/all-food.css";
import products, { IProduct } from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useState } from "react";
const AllFood = (props: Props) => {
  const [searchProduct, setSearchProduct] = useState<string>("");
  const [productData, setProductData] = useState<IProduct[]>(products);
  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col
              lg="6"
              md="6"
              sm="6"
              className=""
            >
              <div className="search d-flex align-items-center justify-content-between w-50">
                <input
                  type="text"
                  placeholder="I'm looking for ..."
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                />
                <span>
                  <AiOutlineSearch />
                </span>
              </div>
            </Col>
            <Col
              lg="6"
              md="6"
              sm="6"
              className=""
            >
              <div className="sorting-widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically ,A-Z</option>
                  <option value="descending">Alphabetically ,Z-A </option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price </option>
                </select>
              </div>
            </Col>

            {productData
              .filter((item) => {
                if (searchProduct === "") return item;
                if (
                  item.title
                    .toLocaleLowerCase()
                    .includes(searchProduct?.toLocaleLowerCase())
                ) {
                  return item;
                }
              })
              .map((product) => (
                <Col
                  lg="3"
                  md="4"
                  sm="6"
                  xs="6"
                  key={product.id}
                  className="my-4"
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

export default AllFood;

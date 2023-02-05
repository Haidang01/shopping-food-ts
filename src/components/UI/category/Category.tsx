import React from "react";
import "../../../styles/category.css";
type Props = {};
import categoryImg1 from "../../../assets/images/category-01.png";
import categoryImg2 from "../../../assets/images/category-02.png";
import categoryImg3 from "../../../assets/images/category-03.png";
import categoryImg4 from "../../../assets/images/category-04.png";
import { Container, Row, Col } from "react-bootstrap";
const categoryData = [
  {
    display: "Fast food",
    imgUrl: categoryImg1,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg2,
  },
  {
    display: "Asian Food",
    imgUrl: categoryImg3,
  },
  {
    display: "Row Meat",
    imgUrl: categoryImg4,
  },
];

const Category = (props: Props) => {
  return (
    <Container className="mt-5 my-5">
      <Row>
        {categoryData.map((category, index) => (
          <Col
            lg="3"
            md="4"
            sm="6"
            xs="6"
            className="mb-3"
          >
            <div className="category-item d-flex align-items-center justify-content-center gap-3">
              <div className="category-img">
                <img
                  src={category.imgUrl}
                  alt=""
                />
              </div>
              <h6>{category.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;

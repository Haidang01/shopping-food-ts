import React, { FC } from "react";
import { Container } from "react-bootstrap";
import "../../../styles/common-section.css";

type Props = {
  title?: string;
};
const CommonSection: FC<Props> = (props) => {
  return (
    <section className="common-section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;

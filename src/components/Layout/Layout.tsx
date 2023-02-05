import React from "react";
import Header from "../Header/Header";
import Routers from "../../Routes/Routers";
import Footer from "../Footer/Footer";
import { Container } from "react-bootstrap";
import Carts from "../UI/cart/Carts";
import { useAppSelector } from "../../redux/store";

const Layout = () => {
  const { openCart } = useAppSelector((state) => state.rootReducer.cartUi);
  return (
    <>
      <Header />
      {openCart && <Carts />}
      <Container style={{ zIndex: 1, overflow: "hinden", width: "100vw" }}>
        <Routers />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

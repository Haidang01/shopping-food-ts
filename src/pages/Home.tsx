import React, { useEffect, useRef, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import hero from '../assets/images/hero.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/product-card.css';
import { BsCheckCircle } from 'react-icons/bs';
import Category from '../components/UI/category/Category';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products, { IProduct } from '../assets/fake-data/products';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../styles/product-card.css';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';
const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    desc: 'lorem ipsum dolor sit amet, consectetur adip',
  },
];
type Props = {};
const Home = (props: Props) => {
  const [category, setCategory] = useState<
    'ALL' | 'BREAD' | 'PIZZA' | 'BURGER'
  >('ALL');
  const [allProducts, setAllProducts] = useState<IProduct[]>(products);

  const [hotPizza, setHotPizza] = useState<IProduct[]>([] as IProduct[]);
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === 'Pizza');
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);
  const proRef = useRef<HTMLElement>(null);

  function handleButtonClick() {
    proRef.current && proRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    if (category === 'BURGER') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Burger'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'PIZZA') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Pizza'
      );
      setAllProducts(filteredProducts);
    }
    if (category === 'BREAD') {
      const filteredProducts = products.filter(
        (item) => item.category === 'Bread'
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <Helmet title='Home'>
      {/* ============hero================== */}
      <section className=''>
        <Container>
          <Row>
            <Col
              lg='6'
              md='6'
            >
              <div className='hero-content py-5'>
                <h5 className='mb-4 mt-4'>Easy way to make an order</h5>
                <h1 className='mb-4'>
                  <span className='text-danger'>HUNGRY?</span>Just wait food{' '}
                  <span className='text-danger'>at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos minus ullam consequatur aperiam in magni! Dolor
                  facilis, nobis atque assumenda amet labore repellendus?
                  Nostrum quia, eos nisi cum optio dolore!
                </p>
                <div className='hero-btn mt-4 d-flex align-items-center gap-3'>
                  <button
                    onClick={handleButtonClick}
                    className='order-btn d-flex align-items-center justify-content-between gap-1'
                  >
                    Order now
                    <FiArrowRight className='' />
                  </button>
                  <Link to={'/foods'}>
                    <button className='all-foods'>See All foods</button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col
              lg='6'
              md='6'
            >
              <div className='hero-img'>
                <img
                  src={hero}
                  alt='hero image'
                  className='w-100'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* =============category============ */}
      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col
              lg='12'
              className='text-center '
            >
              <h5 className='subtitle mb-4 mt-5'>What we serve</h5>
              <h2 className='title'>Just sit back at home</h2>
              <h2 className='title'>
                We will <span>take care</span>
              </h2>
              <p className=' w-60 mt-3 px-5 fs-6 fw-lighter '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                nulla tempore sapiente non animi minima consequatur vero officia
                deleniti natus quaerat provident, officiis consequuntur saepe
                ratione illum facere quia commodi!
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col
                lg='4'
                md='4'
                key={index}
                className='mt-5'
              >
                <div className='feature-item text-center px-5 py-3'>
                  <img
                    src={item.imgUrl}
                    alt=''
                    className='w-25 mb-3'
                  />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* =================product================ */}
      <section ref={proRef}>
        <Container>
          <Row>
            <Col
              lg='12'
              className='text-center'
            >
              <h2>Popular Foods</h2>
            </Col>
            <Col lg='12'>
              <div className='food-category d-flex justify-content-center align-items-center gap-4'>
                <button
                  onClick={(e) => setCategory('ALL')}
                  className={`all-btn ${
                    category === 'ALL' ? 'foodBtnActive' : ''
                  }`}
                >
                  All
                </button>
                <button
                  onClick={(e) => setCategory('BURGER')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BURGER' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img
                    src={foodCategoryImg01}
                    alt=''
                  />
                  Burger
                </button>
                <button
                  onClick={(e) => setCategory('PIZZA')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'PIZZA' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img
                    src={foodCategoryImg02}
                    alt=''
                  />
                  Pizza
                </button>
                <button
                  onClick={(e) => setCategory('BREAD')}
                  className={`d-flex align-items-center gap-2 ${
                    category === 'BREAD' ? 'foodBtnActive' : ''
                  }`}
                >
                  <img
                    src={foodCategoryImg03}
                    alt=''
                  />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((product, index) => (
              <Col
                lg='3'
                md='4'
                key={product.id}
                className='mt-5 '
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* ================================================ */}
      <section>
        <Container>
          <Row>
            <Col
              lg='6'
              md='6'
            >
              <img
                src={whyImg}
                className='w-100'
                alt=''
              />
            </Col>
            <Col
              lg='6'
              md='6'
            >
              <div className='why-tasty-treat'>
                <h2 className='treat-title my-2'>
                  Why <span className='text-danger'> Tasty Treat </span>?
                </h2>
                <p className='fw-lighter'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  ipsum, vel laboriosam deleniti dolorem nisi cum possimus
                  necessitatibus perspiciatis aperiam aliquid
                </p>
                <ListGroup className='my-2'>
                  <ListGroupItem>
                    <p className='d-flex  align-items-center gap-2'>
                      <BsCheckCircle className='text-danger' />
                      Fresh and tasty foods
                    </p>
                    <p className='fw-lighter'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, vero?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className='d-flex align-items-center gap-2'>
                      <BsCheckCircle className='text-danger' />
                      Quanlity support
                    </p>
                    <p className='fw-lighter'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, vero?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem>
                    <p className='d-flex align-items-center gap-2'>
                      <BsCheckCircle className='text-danger' />
                      Order form any location
                    </p>
                    <p className='fw-light'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, vero?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ====================hot pizzas================================ */}
      <section className='pt-0 my-5'>
        <Container>
          <Row>
            <Col
              lg='12'
              className='text-center mb-5'
            >
              <h2>Hot Pizza</h2>
            </Col>
            {hotPizza.map((item, index) => (
              <Col
                lg='3'
                md='4'
                key={item.id}
              >
                <ProductCard product={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      {/* =========================================== */}
      <section className='mt-5'>
        <Container>
          <Row>
            <Col
              lg='6'
              md='6'
            >
              <div className='testimonial mb-5'>
                <h5 className='testimonial-subtitle'>Testimonial-img</h5>
                <h2 className='my-3'>
                  What our <span className='text-danger'>customers</span> are
                  saying
                </h2>
                <p className='testimonial-desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, iusto quia? Nesciunt, eligendi voluptate quas,
                  placeat earum tempore sed in culpa exercitationem quisquam
                  labore, libero veniam autem voluptatem. Molestias, tenetur.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col
              lg='6'
              md='6'
            >
              <img
                className='w-100'
                src={networkImg}
                alt=''
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { GrFormClose } from 'react-icons/gr';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/shopping-cart.css';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { toggle } from '../../../redux/features/cartUiSlice';
type Props = {};

const Carts = (props: Props) => {
  const dispatch = useAppDispatch();
  const { totalAmount } = useAppSelector((state) => state.rootReducer.cart);
  const toggleCart = () => {
    dispatch(toggle());
  };
  const { cartProducts } = useAppSelector((state) => state.rootReducer.cart);
  return (
    <div className='cart-container'>
      <ListGroup className='cart'>
        <div className='cart-close'>
          <span onClick={toggleCart}>
            <GrFormClose className='fs-3' />
          </span>
        </div>
        <div className='cartItem-list px-2'>
          {cartProducts.length === 0 ? (
            <h6 className='text-danger m-4'>No item added to the cart</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem
                item={item}
                key={item.id}
              />
            ))
          )}
        </div>
        <div className='cart-bottom d-flex align-items-center justify-content-between'>
          <h6>
            Subtotal: <span> ${totalAmount}</span>{' '}
          </h6>
          <button>
            <Link to={'/cart'}>Checkout</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;

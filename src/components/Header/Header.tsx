import React, { useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/res-logo.png';
import '../../styles/header.css';
import { FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { toggle } from '../../redux/features/cartUiSlice';
type Props = {};
const navLinks = [
  {
    display: 'Home',
    path: '/home',
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  },
];
const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLElement>(null);
  const toggleMenu = () => menuRef.current?.classList.toggle('show');
  const { totalQuantity } = useAppSelector((state) => state.rootReducer.cart);
  const { openCart } = useAppSelector((state) => state.rootReducer.cartUi);

  const toggleCart = () => {
    dispatch(toggle());
  };
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <NavLink to='/home'>
        <div className='logo d-flex flex-column align-items-center'>
          <img
            className=''
            src={logo}
            alt='logo'
          />
          <span>Tasty Treat</span>
        </div>
      </NavLink>
      {/* Menu */}
      <nav
        className='nav-bar'
        ref={menuRef}
      >
        <ul className=' d-flex'>
          {navLinks.map(({ display, path }, index) => (
            <li>
              <NavLink
                to={path}
                key={index}
                onClick={toggleMenu}
                className={(nav) => (nav.isActive ? 'active' : '')}
              >
                {display}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* =============right=============== */}
      <div className='mt'>
        <ul className='nav-right d-flex  align-items-center gap-4'>
          <li
            className='cart-icon'
            onClick={toggleCart}
          >
            <FiShoppingCart className='sgv' />
            <span className='cart-badge'>{totalQuantity}</span>
          </li>
          <li className='user'>
            <Link to=''>
              <FaRegUser className='sgv' />
            </Link>
          </li>
        </ul>
      </div>
      <div
        className='hamburger'
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className='sgv' />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="shoesXico" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho </strong>
            <span>3 </span>
          </div>
          <MdShoppingBasket size={26} color={'#FFF'} />
        </Cart>
      </Container>
    );
}


export default Header;


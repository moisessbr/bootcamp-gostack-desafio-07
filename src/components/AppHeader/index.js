import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

import { Logo, Cart, CartItems } from './styles';

import logo from '../../assets/images/header/logo.png';

export function Name() {
  return <Logo source={logo} />;
}

function Basket({ cartSize }) {
  return (
    <Cart>
      <CartItems>{cartSize}</CartItems>
      <Icon name="shopping-basket" size={24} color="#fff" />
    </Cart>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Basket);

import React from 'react';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  PContainer,
  CartEmptyImage,
  CartEmpty,
  Product,
  ProductList,
  ProductImage,
  ProductRemove,
  ProductData,
  ProductTitle,
  ProductPrice,
  ProductBar,
  ProductCount,
  ProductAmount,
  ProductTotalPrice,
  CartEnd,
  CartEndText,
  CartTotalValue,
  CartEndButton,
  CartEndButtonText,
} from './styles';

import Basket, { Name } from '../../components/AppHeader';
import formatPrice from '../../util/format';

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  if (cart.length > 0) {
    return (
      <Container>
        <PContainer>
          <ProductList
            data={cart}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <>
                <Product>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductData>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductData>
                  <ProductRemove>
                    <TouchableHighlight onPress={() => removeFromCart(item.id)}>
                      <Icon name="delete-forever" size={24} color="#7159c1" />
                    </TouchableHighlight>
                  </ProductRemove>
                </Product>
                <ProductBar>
                  <ProductCount>
                    <TouchableHighlight onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </TouchableHighlight>
                    <ProductAmount
                      editable={false}
                      value={String(item.amount)}
                    />
                    <TouchableHighlight onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </TouchableHighlight>
                  </ProductCount>
                  <ProductTotalPrice>{item.subtotal}</ProductTotalPrice>
                </ProductBar>
              </>
            )}
          />
          <CartEnd>
            <CartEndText>TOTAL</CartEndText>
            <CartTotalValue>{total}</CartTotalValue>
            <CartEndButton>
              <CartEndButtonText>FINALIZAR PEDIDO</CartEndButtonText>
            </CartEndButton>
          </CartEnd>
        </PContainer>
      </Container>
    );
  }
  return (
    <Container>
      <PContainer>
        <CartEmptyImage>
          <Icon name="remove-shopping-cart" size={80} color="#ddd" />
        </CartEmptyImage>
        <CartEmpty>Seu carrinho está vazio.</CartEmpty>
      </PContainer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  total: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

Cart.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Name />
    </TouchableHighlight>
  ),
  headerRight: <Basket />,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

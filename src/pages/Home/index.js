import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddToCart,
  ProductAddToCartText,
  ProductAddToCartIcon,
  ProductAddToCartAmount,
} from './styles';
import Basket, { Name } from '../../components/AppHeader';
import api from '../../services/api';
import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <Name />,
      headerRight: (
        <TouchableHighlight onPress={() => navigation.navigate('Cart')}>
          <Basket />
        </TouchableHighlight>
      ),
    };
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');
    const data = await Promise.all(
      response.data.map(async product => ({
        ...product,
        priceFormatted: await formatPrice(product.price),
      }))
    );
    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest, navigation } = this.props;

    addToCartRequest(id);
    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <ProductAddToCart onPress={() => this.handleAddProduct(item.id)}>
                <ProductAddToCartIcon>
                  <Icon name="add-shopping-cart" size={16} color="#fff" />
                  <ProductAddToCartAmount>
                    {amount[item.id] || 0}
                  </ProductAddToCartAmount>
                </ProductAddToCartIcon>
                <ProductAddToCartText>ADICIONAR</ProductAddToCartText>
              </ProductAddToCart>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

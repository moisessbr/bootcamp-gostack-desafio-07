import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
  flex-direction: row;
`;

export const ProductList = styled.FlatList.attrs({
  ShowVirtualScrollIndicator: false,
})`
  padding-top: 20px;
  padding-left: 10px;
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  height: 358px;
  margin: 10px 10px;
  border-radius: 5px;
  overflow: hidden;
`;
export const ProductImage = styled.Image`
  height: 200;
  width: 200;
  margin: 10px 10px;
`;
export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 21px;
  color: #333;
  font-weight: 600;
  margin: 5px 10px;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  color: #000;
  font-weight: bold;
  margin: 0 10px;
`;
export const ProductAddToCart = styled(RectButton)`
  flex-direction: row;
  background: #9374f7;
  border-radius: 4px;
  margin: 5px 10px;
  align-items: center;
  width: 200;
  height: 42;
`;
export const ProductAddToCartText = styled.Text`
  flex: 3;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

export const ProductAddToCartIcon = styled.View`
  flex: 1;
  background: #7159c1;
  width: 40px;
  height: 42px;
  margin: 0 0;
  border-bottom-left-radius: 5;
  border-top-left-radius: 5;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ProductAddToCartAmount = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
`;

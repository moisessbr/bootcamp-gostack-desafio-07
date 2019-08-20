import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #191920;
`;

export const PContainer = styled.View`
  flex: 0 1 auto;
  align-items: stretch;
  background: #fff;
  border-radius: 6px;
  margin: 20px 20px;
  padding: 5px;
`;

export const CartEmptyImage = styled.View`
  flex: 1;
  align-items: center;
  padding: 50px 0px;
`;

export const CartEmpty = styled.Text`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  text-align: center;
  padding: 50px 0px;
`;

export const ProductList = styled.FlatList.attrs({
  ShowVirtualScrollIndicator: false,
})`
  background: #fff;
  flex: 0 2 auto;
  padding: 0px;
`;

export const Product = styled.View`
  background: #fff;
  margin: 10px 10px;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
export const ProductImage = styled.Image`
  height: 80;
  width: 80;
  margin: 5px 5px;
`;

export const ProductData = styled.View`
  width: 180;
  height: 80;
  flex-wrap: nowrap;
`;

export const ProductRemove = styled.View`
  flex: 1;
  flex-direction: row;
  width: 30;
  height: 80;
  align-items: center;
  justify-content: flex-end;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  color: #333;
  font-weight: 600;
  margin: 5px 0px;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const ProductBar = styled.View`
  flex-direction: row;
  background-color: #eee;
  border-radius: 6px;
  margin: 0px 10px;
  flex: 1;
  justify-content: space-between;
`;
export const ProductCount = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
export const ProductAmount = styled.TextInput`
  border: 1px solid #ddd;
  color: #888;
  border-radius: 4px;
  background: #fff;
  padding: 5px 5px;
  margin: auto 5px;
  width: 50px;
  height: 26px;
  text-align: center;
  align-items: center;
`;
export const ProductTotalPrice = styled.Text`
  flex: 1;
  text-align: right;
  margin: auto 20px;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const CartEnd = styled.View`
  padding-top: 30px;
`;
export const CartEndText = styled.Text`
  font-size: 16px;
  color: #999;
  font-weight: bold;
  text-align: center;
`;
export const CartTotalValue = styled.Text`
  font-size: 30px;
  color: #000;
  font-weight: bold;
  text-align: center;
`;
export const CartEndButton = styled(RectButton)`
  margin: 30px auto;
  width: 315;
  height: 42;
  background: #9374f7;
  border-radius: 4px;
  justify-content: center;
  padding-top: 10px;
`;
export const CartEndButtonText = styled.Text`
  flex: 3;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

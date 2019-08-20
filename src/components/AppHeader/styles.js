import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 185;
  height: 24;
  margin: auto 24px;
`;

export const Cart = styled.View`
  width: 24;
  height: 24;
  margin: auto 24px;
`;

export const CartItems = styled.Text`
  color: #fff;
  font-size: 12;
  text-align: center;
  padding: 1px;
  position: absolute;
  top: -6;
  left: 14;
  z-index: 1;
  background: #7159c1;
  height: 16;
  width: 16;
  border-radius: 8;
  border: 6px solid #7159c1;
  line-height: 14;
`;

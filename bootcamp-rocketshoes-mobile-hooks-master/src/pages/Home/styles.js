import styled from 'styled-components/native';
import { darken } from 'polished';
import color from '../../styles/colors';

export const Container = styled.View`
  background: ${color.dark_secondary};
`;

export const Product = styled.View`
  width: 220px;
  min-height: 360px;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  margin-top: 5px;
  margin-bottom: 14px;
  font-size: 21px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
  background-color: ${color.primary};
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.05, color.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 12px 0px 5px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;

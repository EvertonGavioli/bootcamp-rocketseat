import styled from 'styled-components/native';
import color from '../../styles/colors';

export const Container = styled.View`
  min-height: 200px;
  margin: 20px;
  border-radius: 4px;
  background: #fff;
`;

export const Product = styled.View`
  padding: 15px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 5px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  padding: 5px;
  margin: 0px 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
  max-width: 120px;
  height: 26px;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalContainer = styled.View`
  margin: 10px;
`;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Order = styled.TouchableOpacity`
  background: ${color.primary};
  padding: 12px;
  border-radius: 4px;
`;

export const OrderText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
`;

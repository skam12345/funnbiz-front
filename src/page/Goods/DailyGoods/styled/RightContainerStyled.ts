import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';

export const RightContainerBoxCSS = styled(View)`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RightImageViewCSS = styled(Image)`
  width: 100%;
  height: 80%;
  border-radius: 8px;
`;

export const RightGoodsSubjectCSS = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  color: white;
`;

export const RightGoodsNameCSS = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: white;
`;

export const RightPriceBoxCSS = styled(View)`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RightDiscountBoxCSS = styled(View)`
  width: 35%;
  height: 80%;
  background-color: #6866f7;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightDiscountTextCSS = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const RightPriceTextCSS = styled(Text)`
  font-size: 12px;
  font-weight: 700;
  color: white;
`;

export const RightPriceUnitCSS = styled(Text)`
  font-size: 8px;
  color: white;
`;

export const IconGoodCSS = styled(Icon)`
  position: absolute;
  right: 0px;
  bottom: 40px;
`;

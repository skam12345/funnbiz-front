import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import styleded from 'styled-components/native';
import { d_width } from '../../../../config/constant';

export const ImageRollingContainerScrollBoxCSS = styled(View)`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const ImageRollingContaienrBoxCSS = styled(View)`
  width: ${d_width * 1.0 - 62}px;
  height: 265px;
  border-radius: 13px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 15px;
`;

export const ImageRollingContainerImgCSS = styled(Image)`
  width: 100%;
  height: 147px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const ImageRollingContainerTextBoxCSS = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ImageRollingContainerTagBoxCSS = styled(View)`
  margin-top: 15px;
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageRollingContainerTagCSS = styled(View)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #777777;
  border-radius: 4px;
`;

export const ImageRollingContainerTagTextCSS = styled(Text)`
  font-size: 10px;
  font-weight: 600;
  color: white;
`;

export const ImageRollingContainerRegionTextCSS = styled(Text)`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: #909090;
`;

export const ImageRollingContainerNameTextCSS = styled(Text)`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 800;
  color: black;
`;

export const ImageRollingContainerIndicatorBoxCSS = styled(View)`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageRollingContainerIndicatorSelectCSS = styleded.View<{
  width: number;
  height: number;
}>`
    width: ${props => (props.width ? props.width : 40)}px;
    height: ${props => (props.height ? props.height : 10)}px;
    border-radius: 60px;
    background-color: #6064ff;
    margin-right: 8px;
`;

export const ImageRollingContainerIndicatorUnSelectCSS = styleded.View<{
  width: number;
  height: number;
}>`
    width: ${props => (props.width ? props.width : 10)}px;
    height: ${props => (props.height ? props.height : 10)}px;
    border-radius: 80px;
    background-color: #8b8b8b;
    margin-right: 8px;
`;

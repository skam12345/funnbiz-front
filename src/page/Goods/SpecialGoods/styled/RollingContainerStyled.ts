import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import styleded from 'styled-components/native';

export const RollingContainerScrollBoxCSS = styled(View)`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
`;

export const RollingContainerBoxCSS = styled(View)`
  width: 240px;
  height: 230px;
  margin-right: 24px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

export const RollingContainerImgCSS = styled(Image)`
  width: 100%;
  height: 147px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const RollingContainerTextBoxCSS = styled(View)`
  width: 100%;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
`;

export const RollingContainerNameTextCSS = styled(Text)`
  font-size: 15px;
  font-weight: 900;
  color: black;
  margin-top: 8px;
`;

export const RollingContainerExplainTextCSS = styled(Text)`
  font-size: 11px;
  font-weight: 900;
  color: #afafaf;
  top: 2px;
`;

export const RollingContainerFinishDesignCSS = styled(View)`
  z-index: 50;
  width: 60px;
  height: 24px;
  border: 1px solid #ff7246;
  border-radius: 30px;
  background-color: white;
  position: absolute;
  top: 134px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RollingContainerFinishTextCSS = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: #ff7246;
  margin-bottom: 3px;
`;

export const RollingContainerIndicatorBoxCSS = styled(View)`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const RollingContainerIndicatorSelectCSS = styleded.View<{
  width: number;
  height: number;
}>`
  width: ${props => (props.width ? props.width : 40)}px;
  height: ${props => (props.height ? props.height : 20)}px;
  border-radius: 60px;
  background-color: #6064ff;
  margin-right: 8px;
`;

export const RollingContainerIndicatorUnSelectCSS = styleded.View<{
  width: number;
  height: number;
}>`
  width: ${props => (props.width ? props.width : 10)}px;
  height: ${props => (props.height ? props.height : 10)}px;
  border-radius: 100px;
  background-color: #8b8b8b;
  margin-right: 8px;
`;

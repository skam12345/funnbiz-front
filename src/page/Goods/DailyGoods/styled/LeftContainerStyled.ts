import { Image, Pressable, Text, View } from 'react-native';
import styled from 'styled-components';
import { d_width } from '../../../../config/constant';

export const LeftContainerBoxCSS = styled(View)`
  width: ${d_width * 0.45}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LeftContentTopBoxCSS = styled(View)`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const LeftContentSpaceBoxCSS = styled(View)`
  height: 4%;
`;

export const LeftContentContainBoxCSS = styled(View)`
  width: 100%;
  height: 52%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const LeftIntroTextCSS = styled(Text)`
  width: 100%;
  font-size: 13px;
  font-weight: bold;
  color: #a09fa5;
`;

export const LeftWhiteTextCSS = styled(Text)`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const LeftContainTextCSS = styled(Text)`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #d4d3d6;
`;

export const LeftContainTimerBoxCSS = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LeftClockImageCSS = styled(Image)`
  width: 29px;
  height: 29px;
`;

export const LeftRowSpaceCSS = styled(View)`
  width: 10px;
`;

export const LeftTimerTextCSS = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: white;
`;

export const LeftViewButtonCSS = styled(Pressable)`
  width: 70%;
  height: 45px;
  background-color: transparent;
  border-radius: 150px;
  border: 0.5px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LeftTextInButton = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;

import {ImageBackground, Text, View, Dimensions} from 'react-native';
import styled from 'styled-components';

export const TopContainerCSS = styled(View)`
  width: 100%;
  height: ${Dimensions.get('window').height * 1.0}px;
  display: flex;
  flex-direction: column;
`;

export const TopImagContentBoxCSS = styled(View)`
  position: absolute;
  left: 8%;
  top: 120px;
  width: 75%;
  height: ${Dimensions.get('window').height * 0.24}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DesignContainer = styled(View)`
  width: 80px;
  height: 25px;
  border-radius: 150px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DesignText = styled(Text)`
  font-weight: bold;
  color: black;
`;

export const SubTitle = styled(Text)`
  font-weight: bold;
  color: white;
`;

export const IntroText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;

export const TopBannerCSS = styled(ImageBackground)`
  width: 100%;
  height: ${Dimensions.get('screen').height * 0.46}px;
`;

export const BottomBannerCSS = styled(View)`
  position: absolute;
  width: 100%;
  height: ${Dimensions.get('screen').height * 0.6}px;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0px;
`;

export const TopMiddleSpaceCSS = styled(View)`
  height: 40px;
`;

export const TopBottomTopSpaceCSS = styled(View)`
  height: 45px;
`;

export const TopHouseBoxCSS = styled(View)`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TopTripBoxCSS = styled(View)`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TopContentBoxCSS = styled(View)`
  width: 60px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TopHeadTitleBoxCSS = styled(View)`
  width: 100%;
  height: 40px;
  padding-left: 20px;
`;

export const TopTripHeadTextCSS = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const TopTripImageCSS = styled(ImageBackground)`
  width: 55px;
  height: 55px;
  overflow: hidden;
  border-radius: 100px;
`;

export const TopTripTextCSS = styled(Text)`
  font-size: 11px;
  font-weight: normal;
  color: black;
  text-align: center;
`;

export const RecommandBoxCSS = styled(View)`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const RecommandHeadTitleBoxCSS = styled(View)`
  width: 100%;
  height: 40px;
  padding-left: 20px;
`;

export const RecommandHeadTitleTextCSS = styled(Text)`
  font-size: 18px;
  color: black;
`;

export const RecommandBlueTextCSS = styled(Text)`
  color: #6866f7;
  font-weight: bold;
`;

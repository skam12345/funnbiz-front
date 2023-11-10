import {View, Text} from 'react-native';
import styled, {css} from 'styled-components';

const funColor = css`
  background-color: #4d4bd6;
`;

const centerColor = css`
  background-color: #02ac65;
`;

const arrowColor = css`
  background-color: #051019;
`;

export const NewNotiCSS = styled(View)`
  position: absolute;
  top: 8px;
  right: 15px;
  width: 10px;
  height: 10px;
  border-radius: 80px;
  background-color: #ffee51;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewTextCSS = styled(Text)`
  font-size: 6px;
  font-weight: bold;
  text-align: center;
  color: #4d4bd6;
`;

export const FunCircleCSS = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${funColor}
  border-radius: 300px;
  width: 60px;
  height: 60px;
`;

export const CenterCirlceCSS = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${centerColor}
  border-radius: 300px;
  width: 60px;
  height: 60px;
`;

export const ArrowCircleCSS = styled(View)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${arrowColor}
  border-radius: 300px;
  width: 60px;
  height: 60px;
`;

export const FixedTextCSS = styled(Text)`
  font-size: 11px;
  font-weight: normal;
  text-align: center;
  color: white;
`;

export const FixedBoxCSS = styled(View)`
  position: absolute;
  width: 20%;
  height: 200px;
  right: 2%;
  top: 32%;
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

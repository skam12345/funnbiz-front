import { Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import styles from 'styled-components/native';
import { d_height } from '../../../../config/constant';

export const SearchContentContainerCSS = styled(View)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #726b6b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SearchContentSearchBoxCSS = styled(TextInput)`
  width: 100%;
  height: ${(d_height * 0.2) / 4}px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #726b6b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  font-size: 16px;
  text-overflow: ellipsis;
  text-align: center;
`;

export const SearchContentIconBoxCSS = styled(View)`
  position: absolute;
  left: 10px;
  width: 10%;
  height: ${(d_height * 0.2) / 4}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContentSearchBoxIconCSS = styled(Icon)``;

export const SearchContentCalAndGuestBoxCSS = styled(View)`
  width: 100%;
  height: ${(d_height * 0.2) / 4}px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #726b6b;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContentCalBoxCSS = styles.Pressable`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #726b6b;
`;

export const SearchContentCalIconBoxCSS = styled(View)`
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchContentCalTextBoxCSS = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchContentCalIconCSS = styled(Icon)``;

export const SearchContentCalDateTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: black;
`;

export const SearchContentCalTextCSS = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  color: #a1a1a1;
`;

export const SearchContentGuestBoxCSS = styles.Pressable`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContentGuestIconCSS = styled(Icon)`
  margin-left: 12px;
`;

export const SearchContentGuestTextCSS = styled(Text)`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 400;
  color: black;
`;

export const SearchContentButtonBoxCSS = styles.TouchableOpacity`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #6866f7;
`;

export const SearchContentButtonTextCSS = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

import React from 'react';
import { Button } from 'react-native';
import {
  Contaniner,
  TextCSS,
} from '../../common/screens/styled/BottomTabStyle';

interface LoginProp {
  navigation: undefined;
}

const Login = ({ navigation }) => {
  console.log(navigation);
  const onPressHandler = () => {
    console.log('push');
    navigation.navigate('Main');
  };
  return (
    <Contaniner>
      <TextCSS>로그인</TextCSS>
      <Button
        onPress={onPressHandler}
        title="로그인"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </Contaniner>
  );
};

export default Login;

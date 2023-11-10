import {
  HeaderComponentCSS,
  HeaderInComponentCSS,
  IconBoxCSS,
} from '../../styled/header/HeaderDisplayStyled';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderDisplay = () => {
  return (
    <HeaderComponentCSS>
      <HeaderInComponentCSS>Funbiz</HeaderInComponentCSS>
      <IconBoxCSS>
        <Icon name="search" size={32} color="black" />
        <Icon name="menu-open" size={32} color="black" />
      </IconBoxCSS>
    </HeaderComponentCSS>
  );
};

export default HeaderDisplay;

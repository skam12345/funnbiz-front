import React from 'react';
import {
  FirstTextContainerLeftBoxCSS,
  FirstTextContainerLeftCircleCSS,
  FirstTextContainerLeftIconCSS,
  FirstTextContainerLeftTextCSS,
  FirstTextContainerRightTextCSS,
  FirstTextContainerTextBoxCSS,
} from '../styled/FirstTextContainerStyled';

const FirstTextContainer = () => {
  return (
    <FirstTextContainerTextBoxCSS>
      <FirstTextContainerLeftBoxCSS>
        <FirstTextContainerLeftCircleCSS>
          <FirstTextContainerLeftIconCSS name="call" size={10} color="black" />
        </FirstTextContainerLeftCircleCSS>
        <FirstTextContainerLeftTextCSS>고객센터</FirstTextContainerLeftTextCSS>
      </FirstTextContainerLeftBoxCSS>
      <FirstTextContainerRightTextCSS>
        평일: 9:00~17:00|점심:12:00~13:00(토/일 및 공휴일 휴무)
      </FirstTextContainerRightTextCSS>
    </FirstTextContainerTextBoxCSS>
  );
};

export default FirstTextContainer;

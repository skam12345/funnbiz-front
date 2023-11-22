import React from 'react';
import { ExMainBottom } from '../../../../config/constant/sample/Sampe_HyeonHo';
import {
  PhoneBoxContainerBoldTextCSS,
  PhoneBoxContainerCSS,
  PhoneBoxContainerContentTextCSS,
  PhoneBoxContainerLeftRowBoxCSS,
  PhoneBoxContainerRightRowBoxCSS,
  PhoneBoxContainerTextBoxCSS,
} from '../styled/PhoneBoxContainerStyled';

const PhoneBoxContainer = () => {
  return (
    <PhoneBoxContainerCSS>
      <PhoneBoxContainerTextBoxCSS>
        <PhoneBoxContainerLeftRowBoxCSS>
          <PhoneBoxContainerBoldTextCSS>
            연중휴양소
          </PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerBoldTextCSS>｜</PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerContentTextCSS>
            {ExMainBottom?.data?.phone?.yearRound}
          </PhoneBoxContainerContentTextCSS>
        </PhoneBoxContainerLeftRowBoxCSS>
        <PhoneBoxContainerRightRowBoxCSS>
          <PhoneBoxContainerBoldTextCSS>
            연중비상폰
          </PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerBoldTextCSS>｜</PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerContentTextCSS>
            {ExMainBottom?.data?.phone?.yearRoundEm}
          </PhoneBoxContainerContentTextCSS>
        </PhoneBoxContainerRightRowBoxCSS>
      </PhoneBoxContainerTextBoxCSS>
      <PhoneBoxContainerTextBoxCSS>
        <PhoneBoxContainerLeftRowBoxCSS>
          <PhoneBoxContainerBoldTextCSS>
            하계휴양소
          </PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerBoldTextCSS>｜</PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerContentTextCSS>
            {ExMainBottom?.data?.phone?.summerRound}
          </PhoneBoxContainerContentTextCSS>
        </PhoneBoxContainerLeftRowBoxCSS>
        <PhoneBoxContainerRightRowBoxCSS>
          <PhoneBoxContainerBoldTextCSS>
            하계휴양소
          </PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerBoldTextCSS>｜</PhoneBoxContainerBoldTextCSS>
          <PhoneBoxContainerContentTextCSS>
            {ExMainBottom?.data?.phone?.summerRoundEm}
          </PhoneBoxContainerContentTextCSS>
        </PhoneBoxContainerRightRowBoxCSS>
      </PhoneBoxContainerTextBoxCSS>
    </PhoneBoxContainerCSS>
  );
};

export default PhoneBoxContainer;

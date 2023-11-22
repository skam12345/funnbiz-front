import React from 'react';
import { ExMainBottom } from '../../../../config/constant/sample/Sampe_HyeonHo';
import {
  IntroduceContainerCSS,
  IntroduceContainerTextCSS,
} from '../styled/IntroduceContainerStyled';

const IntroduceContainer = () => {
  return (
    <IntroduceContainerCSS>
      <IntroduceContainerTextCSS>
        {ExMainBottom?.data?.company} {ExMainBottom?.data?.address}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        대표이사: {ExMainBottom?.data?.master} │ 사업자등록번호 :
        {ExMainBottom?.data?.crn}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        고객센터: {ExMainBottom?.data?.phone?.csc} │ 팩스 :
        {ExMainBottom?.data?.fax}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        {ExMainBottom?.data?.copyright}
      </IntroduceContainerTextCSS>
    </IntroduceContainerCSS>
  );
};

export default IntroduceContainer;

import React from 'react';
import { ExMainBottomData } from '../../../../config/constant/sample/Sampe_HyeonHo';
import {
  IntroduceContainerCSS,
  IntroduceContainerTextCSS,
} from '../styled/IntroduceContainerStyled';

const IntroduceContainer = () => {
  return (
    <IntroduceContainerCSS>
      <IntroduceContainerTextCSS>
        {ExMainBottomData?.data?.company} {ExMainBottomData?.data?.address}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        대표이사: {ExMainBottomData?.data?.master} │ 사업자등록번호 :
        {ExMainBottomData?.data?.crn}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        고객센터: {ExMainBottomData?.data?.phone?.csc} │ 팩스 :
        {ExMainBottomData?.data?.fax}
      </IntroduceContainerTextCSS>
      <IntroduceContainerTextCSS>
        {ExMainBottomData?.data?.copyright}
      </IntroduceContainerTextCSS>
    </IntroduceContainerCSS>
  );
};

export default IntroduceContainer;

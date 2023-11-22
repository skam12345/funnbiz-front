import React from 'react';
import { ScrollContainer } from '../../common/styled/AppSyled';
import EventBanner from '../Banner/EventBanner/Event_Banner';
import FooterBanner from '../Banner/FooterBanner/Footer_Banner';
import DailyGoods from '../Goods/DailyGoods/Daily_Goods';
import NewGoods from '../Goods/NewGoods/New_Goods';
import SpecialGoods from '../Goods/SpecialGoods/Special_Goods';
import TopDisplay from './component/TopDisplay';
import FixedDisplay from './component/fixed/FixedDisplay';

const HomeScreen = () => {
  /* 홈화면 컴포넌트 영역 순서 렌더링하는 샘플 코드*/
  // const serverOrder = ['daily', 'Three', 'top'];
  // return (
  //   <>
  //     <ScrollContainer>
  //       {serverOrder.map(data => {
  //         switch (data) {
  //           case 'daily':
  //             return <DailyGoods />;
  //           case 'top':
  //             return <TopDisplay />;
  //           default:
  //             return <Three />;
  //         }
  //       })}
  //     </ScrollContainer>
  //     <FixedDisplay fixed={false} />
  //   </>
  // );
  return (
    <>
      <ScrollContainer>
        <TopDisplay />
        <DailyGoods />
        <SpecialGoods />
        <NewGoods />
        <EventBanner />
        <FooterBanner />
      </ScrollContainer>
      <FixedDisplay fixed={false} />
    </>
  );
};

export default HomeScreen;

import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { SPECIAL_PRODUCT } from '../../../../config/constant';
import {
  RollingContainerBoxCSS,
  RollingContainerExplainTextCSS,
  RollingContainerFinishDesignCSS,
  RollingContainerFinishTextCSS,
  RollingContainerImgCSS,
  RollingContainerIndicatorBoxCSS,
  RollingContainerIndicatorSelectCSS,
  RollingContainerIndicatorUnSelectCSS,
  RollingContainerNameTextCSS,
  RollingContainerScrollBoxCSS,
  RollingContainerTextBoxCSS,
} from '../styled/RollingContainerStyled';

const RollingContainer = () => {
  const design = '땡처리';
  const [current, setCurrent] = useState(0);
  /* 실제로 구현할 때는 데이터 길에 따라 형변환 */
  const controlIndicator = (event: any) => {
    const index =
      Math.floor(event.nativeEvent.contentOffset.x / 160) === -1
        ? 0
        : Math.floor(event.nativeEvent.contentOffset.x / 160) === 4
        ? 3
        : Math.floor(event.nativeEvent.contentOffset.x / 160);
    setCurrent(index);
  };

  return (
    <>
      <RollingContainerScrollBoxCSS>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={SPECIAL_PRODUCT}
          onMomentumScrollEnd={controlIndicator}
          renderItem={item =>
            /*샘플 데이터로 id로 비교한 것뿐 */
            item.item.id === 1 ? (
              <RollingContainerBoxCSS
                key={item.item.id}
                style={{
                  elevation: 3,
                }}
              >
                <RollingContainerFinishDesignCSS>
                  <RollingContainerFinishTextCSS>
                    {design}
                  </RollingContainerFinishTextCSS>
                </RollingContainerFinishDesignCSS>
                <RollingContainerImgCSS source={item.item.img} />
                <RollingContainerTextBoxCSS>
                  <RollingContainerNameTextCSS>
                    {item.item.text}
                  </RollingContainerNameTextCSS>
                  <RollingContainerExplainTextCSS>
                    {item.item.region}
                  </RollingContainerExplainTextCSS>
                </RollingContainerTextBoxCSS>
              </RollingContainerBoxCSS>
            ) : (
              <RollingContainerBoxCSS
                key={item.item.id}
                style={{
                  elevation: 3,
                }}
              >
                <RollingContainerImgCSS source={item.item.img} />
                <RollingContainerTextBoxCSS>
                  <RollingContainerNameTextCSS>
                    {item.item.text}
                  </RollingContainerNameTextCSS>
                  <RollingContainerExplainTextCSS>
                    {item.item.region}
                  </RollingContainerExplainTextCSS>
                </RollingContainerTextBoxCSS>
              </RollingContainerBoxCSS>
            )
          }
        />
      </RollingContainerScrollBoxCSS>
      <RollingContainerIndicatorBoxCSS>
        {SPECIAL_PRODUCT.map(item =>
          item.id - 1 === current ? (
            <RollingContainerIndicatorSelectCSS
              key={item.id}
              width={40}
              height={10}
            />
          ) : (
            <RollingContainerIndicatorUnSelectCSS
              key={item.id}
              width={10}
              height={10}
            />
          ),
        )}
      </RollingContainerIndicatorBoxCSS>
    </>
  );
};

export default RollingContainer;

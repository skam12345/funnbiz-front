import React, { useState } from 'react';
import { Dimensions, FlatList } from 'react-native';
import {
  ImageRollingContaienrBoxCSS,
  ImageRollingContainerImgCSS,
  ImageRollingContainerIndicatorBoxCSS,
  ImageRollingContainerIndicatorSelectCSS,
  ImageRollingContainerIndicatorUnSelectCSS,
  ImageRollingContainerNameTextCSS,
  ImageRollingContainerRegionTextCSS,
  ImageRollingContainerScrollBoxCSS,
  ImageRollingContainerTagBoxCSS,
  ImageRollingContainerTagCSS,
  ImageRollingContainerTagTextCSS,
  ImageRollingContainerTextBoxCSS,
} from '../styled/ImageRollingContainerStyled';

import { NEW_PRODUCT, TAG_LIST } from '../../../../config/constant';

const ImageRollingContainer = () => {
  const [current, setCurrent] = useState(0);

  const controlIndicator = (event: any) => {
    const index =
      Math.floor(
        event.nativeEvent.contentOffset.x /
          (Dimensions.get('screen').width * 1.0 - 62 - 15),
      ) === -1
        ? 0
        : Math.floor(
            event.nativeEvent.contentOffset.x /
              (Dimensions.get('screen').width * 1.0 - 62 - 15),
          ) ===
          NEW_PRODUCT.length + 1
        ? NEW_PRODUCT.length
        : Math.floor(
            event.nativeEvent.contentOffset.x /
              (Dimensions.get('screen').width * 1.0 - 62 - 15),
          );
    setCurrent(index);
  };

  return (
    <>
      <ImageRollingContainerScrollBoxCSS>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={NEW_PRODUCT}
          onMomentumScrollEnd={controlIndicator}
          renderItem={item => (
            <ImageRollingContaienrBoxCSS
              key={item.item.id}
              style={{ elevation: 3 }}
            >
              <ImageRollingContainerImgCSS source={item.item.img} />
              <ImageRollingContainerTextBoxCSS>
                <ImageRollingContainerTagBoxCSS>
                  {TAG_LIST.map(item => (
                    <ImageRollingContainerTagCSS
                      key={item.id}
                      style={{
                        width: item.tag.length * 10 + 15,
                      }}
                    >
                      <ImageRollingContainerTagTextCSS>
                        {item.tag}
                      </ImageRollingContainerTagTextCSS>
                    </ImageRollingContainerTagCSS>
                  ))}
                </ImageRollingContainerTagBoxCSS>
                <ImageRollingContainerRegionTextCSS>
                  {item.item.subject}
                </ImageRollingContainerRegionTextCSS>
                <ImageRollingContainerNameTextCSS>
                  {item.item.name}
                </ImageRollingContainerNameTextCSS>
              </ImageRollingContainerTextBoxCSS>
            </ImageRollingContaienrBoxCSS>
          )}
        />
      </ImageRollingContainerScrollBoxCSS>
      <ImageRollingContainerIndicatorBoxCSS>
        {NEW_PRODUCT.map(item =>
          item.id - 1 === current ? (
            <ImageRollingContainerIndicatorSelectCSS
              key={item.id}
              width={40}
              height={10}
            />
          ) : (
            <ImageRollingContainerIndicatorUnSelectCSS
              key={item.id}
              width={10}
              height={10}
            />
          ),
        )}
      </ImageRollingContainerIndicatorBoxCSS>
    </>
  );
};

export default ImageRollingContainer;

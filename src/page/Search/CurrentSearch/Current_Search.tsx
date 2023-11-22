import React from 'react';
import { FlatList } from 'react-native';
import { ExCurrentSearch } from '../../../config/constant/sample/Sampe_HyeonHo';
import {
  CurrentSearchCSS,
  CurrentSearchContentDataCloseBoxCSS,
  CurrentSearchContentDataCloseTextCSS,
  CurrentSearchContentDataContainerCSS,
  CurrentSearchContentDataLodgeCSS,
  CurrentSearchContentDataTextBoxCSS,
  CurrentSearchContentDataTextCSS,
  CurrentSearchRollingViewCSS,
  CurrentSearchTextCSS,
} from './styled/CurrentSearchStyled';

const CurrentSearch = () => {
  return (
    <CurrentSearchCSS>
      <CurrentSearchTextCSS>최근 검색</CurrentSearchTextCSS>
      <CurrentSearchRollingViewCSS>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={ExCurrentSearch.data}
          renderItem={data => {
            return (
              <CurrentSearchContentDataContainerCSS>
                <CurrentSearchContentDataLodgeCSS ellipsizeMode="tail">
                  {data.item.lodge}
                </CurrentSearchContentDataLodgeCSS>
                <CurrentSearchContentDataTextBoxCSS>
                  <CurrentSearchContentDataTextCSS>
                    {data.item.date}
                  </CurrentSearchContentDataTextCSS>
                  <CurrentSearchContentDataTextCSS>
                    {data.item.guest}
                  </CurrentSearchContentDataTextCSS>
                </CurrentSearchContentDataTextBoxCSS>
                <CurrentSearchContentDataCloseBoxCSS>
                  <CurrentSearchContentDataCloseTextCSS>
                    ×
                  </CurrentSearchContentDataCloseTextCSS>
                </CurrentSearchContentDataCloseBoxCSS>
              </CurrentSearchContentDataContainerCSS>
            );
          }}
        />
      </CurrentSearchRollingViewCSS>
    </CurrentSearchCSS>
  );
};

export default CurrentSearch;

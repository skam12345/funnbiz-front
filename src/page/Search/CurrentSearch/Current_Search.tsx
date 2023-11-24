import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { ExCurrentSearchData } from '../../../config/constant/sample/Sampe_HyeonHo';
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
  const [close, setClose] = useState(ExCurrentSearchData.data);
  let list = ExCurrentSearchData.data;
  const closeCurrent = useCallback(
    (id: number) => {
      for (let i = 0; i < list.length; i++) {
        if (i === list.indexOf(list.filter(sort => sort.id === id)[0])) {
          list.splice(i, 1);
          break;
        }
      }
      setClose([...list]);
    },
    [close],
  );

  return (
    <CurrentSearchCSS>
      <CurrentSearchTextCSS>최근 검색</CurrentSearchTextCSS>
      <CurrentSearchRollingViewCSS>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={close}
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
                <CurrentSearchContentDataCloseBoxCSS
                  onPress={() => closeCurrent(data.item.id)}
                >
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

import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { PUT_URL } from '../../../config/API_APP_URL';
import { putLame, testAxios, testLame } from '../../../service/sample';
import {
  ContentBoxCSS,
  ContentTextCSS,
  PressableCSS,
  PressableTextCSS,
  QueryContainerCSS,
  QueryScrollViewCSS,
  TextBoxCSS,
  TitleTextCSS,
} from './styled/QueryTestStyled';

const QueryTest = () => {
  const [onData, setOnData] = useState({
    id: 101,
    title: '없다',
    body: '없다',
    userId: 1,
  });
  const { data } = useQuery('readData', () => testLame('GET'), {
    onSuccess: () => {
      console.log(data);
      setOnData(data);
    },
  });
  const onMutate = useMutation(() => putLame('PUT', PUT_URL), {
    onSuccess: () => {
      setOnData(onMutate.data);
    },
  });

  return (
    <QueryScrollViewCSS>
      <QueryContainerCSS>
        <ContentBoxCSS key={onData?.id}>
          <TextBoxCSS>
            <TitleTextCSS> Id : </TitleTextCSS>
            <ContentTextCSS>{onData?.id}</ContentTextCSS>
          </TextBoxCSS>
          <TextBoxCSS>
            <TitleTextCSS> Email : </TitleTextCSS>
            <ContentTextCSS>{onData?.title}</ContentTextCSS>
          </TextBoxCSS>
          <TextBoxCSS>
            <TitleTextCSS> Content : </TitleTextCSS>
            <ContentTextCSS>{onData?.body}</ContentTextCSS>
          </TextBoxCSS>
        </ContentBoxCSS>
        <PressableCSS onPress={() => testAxios()}>
          <PressableTextCSS>업데이트</PressableTextCSS>
        </PressableCSS>
        {/* <PressableCSS onPress={() => testLame('GET')}>
          <PressableTextCSS>불러오기</PressableTextCSS>
        </PressableCSS> */}
      </QueryContainerCSS>
    </QueryScrollViewCSS>
  );
};

export default QueryTest;

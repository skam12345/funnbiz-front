import { Dimensions } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const data = [
  {
    key: 1,
    img: require('../../../assets/image/sample/nagoya.jpg'),
    design: '미식여행',
    title: '먹거리 천국',
    region: '오사카&나고야',
    intro: '맛을 따라 다니는 여행',
  },
  {
    key: 2,
    img: require('../../../assets/image/sample/singapol.jpg'),
    design: '축제여행',
    title: '명소 맛국',
    region: '싱가포르',
    intro: '외국 문화를 즐기는 여행',
  },
  {
    key: 3,
    img: require('../../../assets/image/sample/hawii_background.jpg'),
    design: '바다여행',
    title: '신혼여행',
    region: '하와이',
    intro: '풋풋하고 달달한 하와이',
  },
  {
    key: 4,
    img: require('../../../assets/image/sample/cebu.jpg'),
    design: '물놀이여행',
    title: '파라다이스',
    region: '세부',
    intro: '꿈같고 에메랄드 색 바다로 떠나요',
  },
];

export const tripView = [
  {
    key: 1,
    content: [
      {
        key: '1',
        img: require('../../../assets/image/sample/seoul.jpg'),
        Text: '서울',
      },
      {
        key: '2',
        img: require('../../../assets/image/sample/gyunghi.jpg'),
        Text: '경기, 인천',
      },
      {
        key: '3',
        img: require('../../../assets/image/sample/gangwon.jpg'),
        Text: '강원도',
      },
      {
        key: '4',
        img: require('../../../assets/image/sample/chunchungdo.jpg'),
        Text: '충정도',
      },
    ],
  },
  {
    key: 2,
    content: [
      {
        key: '1',
        img: require('../../../assets/image/sample/junrado.jpg'),
        Text: '전라도',
      },
      {
        key: '2',
        img: require('../../../assets/image/sample/gyungsangdo.jpg'),
        Text: '경상도',
      },
      {
        key: '3',
        img: require('../../../assets/image/sample/busan.jpg'),
        Text: '부산',
      },
      {
        key: '4',
        img: require('../../../assets/image/sample/jaeju.jpg'),
        Text: '제주도',
      },
    ],
  },
];

export const tripWay = [
  {
    key: 1,
    content: [
      {
        key: '1',
        img: require('../../../assets/image/sample/hotel.png'),
        Text: '호텔',
      },
      {
        key: '2',
        img: require('../../../assets/image/sample/resort.png'),
        Text: '리조트/콘도',
      },
      {
        key: '3',
        img: require('../../../assets/image/sample/Fansion.png'),
        Text: '펜션/풀빌라',
      },
      {
        key: '4',
        img: require('../../../assets/image/sample/caravan.png'),
        Text: '캠핑카라반',
      },
    ],
  },
  {
    key: 2,
    content: [
      {
        key: '1',
        img: require('../../../assets/image/sample/abroad.png'),
        Text: '해외여행',
      },
      {
        key: '2',
        img: require('../../../assets/image/sample/jaejuTrip.png'),
        Text: '제주특화',
      },
      {
        key: '3',
        img: require('../../../assets/image/sample/promotion_01.png'),
        Text: '프로모션명1',
      },
      {
        key: '4',
        img: require('../../../assets/image/sample/promotion_02.png'),
        Text: '프로모션명2',
      },
    ],
  },
];

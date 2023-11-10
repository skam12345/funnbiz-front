import { Dimensions } from 'react-native';

export const d_width = Dimensions.get('window').width;
export const d_height = Dimensions.get('window').height;
export const EndTime = new Date('2023-11-30 19:55:07').getTime();
export const Utc =
  new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
export const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
export const SPECIAL_PRODUCT = [
  {
    id: 1,
    img: require('../assets/image/sample/gyungsangHotel.jpg'),
    text: '[경상]금호통영마리나리조트',
    region: '경상남도 통영시 도남동 645',
  },
  {
    id: 2,
    img: require('../assets/image/sample/gangwonHotel.jpg'),
    text: '[강원]강원델피노리조트',
    region: '강원도 고성군 토성면 미시령옛길 1153',
  },
  {
    id: 3,
    img: require('../assets/image/sample/jeonradoHotel.jpg'),
    text: '[전라]전라디오션리조트',
    region: '전라남도 여수시 소호동 소호로 295',
  },
  {
    id: 4,
    img: require('../assets/image/sample/busanResort.jpg'),
    text: '[부산]한화리조트 해운대',
    region: '부산광역시 해운대구 마린시티3로 52',
  },
];

export const NEW_PRODUCT = [
  {
    id: 1,
    img: require('../assets/image/sample/sonobelResort.jpg'),
    subject: '[충청남도/천안시]리조트',
    name: '소노벨 천안 리조트',
  },
  {
    id: 2,
    img: require('../assets/image/sample/sonokamResort.jpg'),
    subject: '[경상남도/거제시]리조트',
    name: '소노캄 거제 리조트',
  },
  {
    id: 3,
    img: require('../assets/image/sample/ssolBeachResort.jpg'),
    subject: '[전라남도/진도군]리조트',
    name: '쏠비치 진도 리조트',
  },
  {
    id: 4,
    img: require('../assets/image/sample/HealingStayCosMosResort.jpg'),
    subject: '[경상북도/울릉군]리조트',
    name: '힐링스테이 코스모스 리조트',
  },
  {
    id: 5,
    img: require('../assets/image/sample/KensingtonResort.jpg'),
    subject: '[제주도/서귀포시]리조트',
    name: '켄싱턴리조트 서귀포',
  },
];

export const TAG_LIST = [
  { id: 1, tag: '특가' },
  { id: 2, tag: '핫클릭' },
  { id: 3, tag: '지역대표' },
  { id: 4, tag: 'MD추천' },
  { id: 5, tag: '주간랭킹' },
  { id: 6, tag: 'BEST' },
];

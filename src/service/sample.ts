import axios from 'axios';

export const testLame = (method: string) =>
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => error.json())
    .catch(err => err);

export const putLame = (method: string, url: string) =>
  fetch(url, {
    method: method,
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error.json())
    .catch(err => err);

export const testAxios = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.error);
    });

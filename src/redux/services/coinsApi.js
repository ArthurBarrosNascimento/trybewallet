const url = 'https://economia.awesomeapi.com.br/json/all';

export const requestApi = async () => {
  const request = await fetch(url);
  const data = await request.json();

  const arraycoin = Object.keys(data);
  arraycoin.splice(1, 1);
  return arraycoin;
};

export const currincesApi = async () => {
  const request = await fetch(url);
  const data = await request.json();

  return data;
};

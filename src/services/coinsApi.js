const requestApi = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(url);
  const data = await request.json();

  const arraycoin = Object.keys(data);
  arraycoin.splice(1, 1);
  return arraycoin;
};

export default requestApi;

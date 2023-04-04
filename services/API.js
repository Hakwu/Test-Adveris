
class API {
  getDomain() {
    return 'https://dummyjson.com/products';//API_URL;
  }

  async send(method, route, data = null, auth = true, multiform = false) {
    const api = this.getDomain();

    const headers = !multiform ? {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    } : {
      Accept: 'application/json'
    };

    // if (auth) {
    //   let accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiYWZkY2UwOGUtZTY2MS00N2IyLWI4NGEtZjQ1YjU3MTBiZWRjIiwiZmlyc3ROYW1lIjoiZnJhbmNrIiwibGFzdE5hbWUiOiJsYiIsImVtYWlsIjoieWsyQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkdFIvTnMyeHczd0E5aHRuNUVtSC91ZUFYbHJHbXVNeG9WcFphdnB3QVpPQllaVWpWdlh5M3UiLCJkYXRlT2ZCaXJ0aCI6IjIwMDEtMDMtMDJUMDA6MDA6MDAuMDAzWiIsImVtYWlsVmVyaWZpZWRBdCI6bnVsbCwiYmFsYW5jZSI6MCwiaXNGcm9tT0F1dGgiOmZhbHNlfSwiaWF0IjoxNjczODA5NzYwfQ.zoqZFuRdUcIMa4C1DvNFid94B1-u24opA-rCLsowpw4'; /*AccessToken.get();*/
    //   accessToken = accessToken || '';
    //   if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    // }

    if (method !== 'GET' && data && !multiform) {
      data = JSON.stringify(data);
    }
    else if (multiform) data;
    else data = null;

    try {
      const response = await fetch(api + route, {
        headers,
        method,
        body: data,
      });
    //   console.log(api + route);

      /*if (response.status === 401) {
        AccessToken.remove();
      }*/

      return {
        data: await response.json(),
        status: response.status,
      };
    } catch (e) {
      console.log('API error:', e);
      return {
        data: null,
        status: -1,
      };
    }
  }
}

const service = new API();
export default service;

const API_ENDPOINT =
  'http://api.geonames.org/earthquakesJSON?formatted=true&north=44.1&south=-9.9&east=-22.4&west=55.2&username=mkoppelman';
class Earthquake {
  getData() {
    return fetch(API_ENDPOINT).then(resp => resp.json());
  }
}

const earthquakeApi = new Earthquake();
export default earthquakeApi;



import axios from 'axios';
export default axios.create({
  // prod base url
  // baseURL: 'https://akcprod.appiancloud.com/suite/webapi/',
  // test base url
  baseURL: 'http://localhost:8090',
  // dev base url
  // baseURL: 'https://machintsolutions-dev.appiancloud.com/suite/webapi/',
});

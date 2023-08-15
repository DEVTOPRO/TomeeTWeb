
import axios from 'axios';
export default axios.create({
  // prod base url
  // baseURL: 'https://akcprod.appiancloud.com/suite/webapi/',
  // test base url
  baseURL: 'https://machintsolutions-test.appiancloud.com/suite/webapi/',
  // dev base url
  // baseURL: 'https://machintsolutions-dev.appiancloud.com/suite/webapi/',
headers: {
  // prod appian api key
  // 'Appian-API-Key':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjliMjQ0Mi04MmJiLTRkMjgtYjVjNi05MjBiOTA4ZjZkZmEifQ.dvyXNLNVPb4hiJtKsCfaxsPsvqnzXVwi5aAxzrtZPKQ",
  // test appian api key
  'Appian-API-Key':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2YmU1NDBlMC01ZjBhLTQ1MDgtYjg4Ny1mY2RhNTczOGFkNTEifQ.ZsUuRGp3aTnX8sWhr_dGQNefwy4-ayOYhcGUuseK9s4",
  // dev appian api key
  // 'Appian-API-Key':"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTIzNDE3MC03OWQzLTRkYTAtOTFmNS0wYzViZmQyMzdlNDMifQ.QkG6o8oKyIlmwMx8yDsQQ_qLhtWsZmJcjy51ysCWSOY",
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin':"*"
}, 
});

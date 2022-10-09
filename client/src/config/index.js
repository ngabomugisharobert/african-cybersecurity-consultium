import axios from 'axios';



const get = async (url, data, headers) => {
  return await request('GET', url, data, headers);
};

const put = async (url, data, headers) => {
  return await request('PUT', url, data, headers);
};

const post = async (url, data, headers) => {
  return await request('POST', url, data, headers);
};

const destroy = async (url, data, headers) => {
  return await request('DELETE', url, data, headers);
};

const request = async (method, url, data, headers, realm = 'active-directory') => {
  const { jwtToken } = sessionStorage;

  return await axios({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwtToken}`,
    },
    method,
    data,
    url: DCoreBaseURL + url
  });
};

export const DCore = {
  get,
  post,
  put,
  destroy,
  request
};

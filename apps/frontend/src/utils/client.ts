import axios from 'axios';
import * as auth from '../app/auth-provider';
import { environment } from '../environments/environment';

interface ClientParams {
  data?;
  token?;
  headers?;
}

export default function (
  url,
  { data, token, headers: customHeaders, ...customConfig }: ClientParams = {}
) {
  return axios
    .request({
      method: data ? 'POST' : 'GET',
      url: `${environment.backendUrl}${url}`,
      ...(data || token || Object.keys(customHeaders ?? {}).length
        ? {
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
              ...(data ? { 'Content-Type': 'application/json' } : {}),
              ...customHeaders,
            },
          }
        : {}),
      ...customConfig,
    })
    .then(async ({ status, statusText, data }) => {
      if (status === 401) {
        await auth.logout();
        window.location.assign(window.location.href);
        return Promise.reject({ message: 'Please re-authenticate.' });
      }
      if (statusText === 'OK') {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

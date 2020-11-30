import axios from 'axios';
import { OAUTH_TOKEN } from '../utils/constants';

export const  Get = (url: string) => axios({
  method: 'get',
  url: url,
  headers: {
    Authorization: `Bearer ${OAUTH_TOKEN}`,
  },
})


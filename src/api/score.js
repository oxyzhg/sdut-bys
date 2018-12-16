import http from '@/utils/http';
import qs from 'qs';

export default {
  list: (payload = {}) => {
    return http.post('/getkb/allscore', qs.stringify(payload));
  }
};

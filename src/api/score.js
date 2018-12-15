import axios from 'axios';

const { BASE_API } = this.$store.this.state;

export default {
  list: payload => {
    return axios.post(`${BASE_API}/getkb/allscore`, payload);
  }
};

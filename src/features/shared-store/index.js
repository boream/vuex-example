import { UPDATED_STATUS } from './types';
import mutations from './mutations';
import actions from './actions';

// returns function to isolate state between different stores
const state = () => ({
  ids: [],
  entities: {},
  entitiesStatus: {},
  status: UPDATED_STATUS
});

const getters = {
  getCount: state => state.count,
  getMsg: state => state.msg
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

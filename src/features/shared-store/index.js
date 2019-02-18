import { UPDATED_STATUS } from './types';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// returns function to isolate state between different stores
const state = () => ({
  ids: [],
  entities: {},
  entitiesStatus: {},
  status: UPDATED_STATUS
});

const module = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export createModule() {
  return module;
}

import {
  entitiesGetter,
  entitiesArrayGetter,
  moduleStatusGetter,
  entitesStatusGetter
} from './types';

export default {
  [entitiesGetter](state) {
    return state.entities;
  },
  [entitiesArrayGetter](state) {
    return state.ids.map(id => state.entities[id]);
  },
  [moduleStatusGetter](state) {
    return state.status;
  },
  [entitesStatusGetter](state) {
    return state.entitiesStatus;
  }
};

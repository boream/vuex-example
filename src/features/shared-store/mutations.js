import Vue from 'vue';
import has from 'lodash/has';
import {
  UPDATED_STATUS,
  clearModuleMutation,
  upsertEntityMutation,
  deleteEntityMutation,
  updateEntityStatusMutation,
  updateStatusMutation
} from './types';

export default {
  [clearModuleMutation](state) {
    state.ids = [];
    state.entities = {};
    state.entitiesStatus = {};
    state.status = UPDATED_STATUS;
  },
  [upsertEntityMutation](state, payload) {
    const { entity } = payload;
    if (has(entity, 'id')) {
      Vue.set(state.entities, entity.id, entity);
      const position = state.ids.indexOf(entity.id);
      if (position < 0) {
        state.ids.push(entity.id);
      } else {
        Vue.set(state.ids, position, entity.id);
      }
    }
  },
  [deleteEntityMutation](state, payload) {
    const { entity } = payload;
    if (has(entity, 'id')) {
      const position = state.ids.indexOf(entity.id);
      if (position > -1) {
        Vue.delete(state.ids, entity.id);
        Vue.delete(state.entities, entity.id);
      }
    }
  },
  [updateEntityStatusMutation](state, payload) {
    const { entity, value } = payload;
    if (has(entity, 'id')) {
      Vue.set(state.entitiesStatus, entity.id, value);
    }
  },
  [updateStatusMutation](state, payload) {
    const { value } = payload;
    state.status = value;
  }
};

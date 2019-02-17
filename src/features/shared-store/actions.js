import {
  UPDATED_STATUS,
  UPDATING_STATUS,
  updateEntityStatusMutation,
  updateStatusMutation,
  upsertEntityMutation,
  deleteEntityMutation,
  fetchEntitiesAction,
  upsertEntityAction,
  deleteEntityAction
} from './types';

export default {
  [fetchEntitiesAction]({ commit }, promise) {
    commit(updateStatusMutation, { value: UPDATING_STATUS });
    return promise
      .then(results => {
        results.forEach(entity => commit(upsertEntityMutation, { entity }));
      })
      .catch(error => Promise.reject(error))
      .finally(() => commit(updateStatusMutation, { value: UPDATED_STATUS }));
  },
  [upsertEntityAction]({ commit }, payload) {
    const { entity, service } = payload;
    commit(updateEntityStatusMutation, { entity, value: UPDATING_STATUS });
    return service(entity)
      .then(response => {
        commit(upsertEntityMutation, { entity: response });
        return response;
      })
      .catch(error => Promise.reject(error))
      .finally(() =>
        commit(updateEntityStatusMutation, { entity, value: UPDATED_STATUS })
      );
  },
  [deleteEntityAction]({ commit }, payload) {
    const { entity, service } = payload;
    commit(updateEntityStatusMutation, { entity, value: UPDATING_STATUS });
    return service(entity)
      .then(response => {
        commit(deleteEntityMutation, { entity: response });
        return response;
      })
      .catch(error => Promise.reject(error))
      .finally(() =>
        commit(updateEntityStatusMutation, { entity, value: UPDATED_STATUS })
      );
  }
};

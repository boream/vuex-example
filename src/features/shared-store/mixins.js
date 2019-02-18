import isObjectLike from 'lodash/isObjectLike';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import isNil from 'lodash/isNil';

function getEntityById(entities, id){
  if (isObjectLike(entities)) {
    return cloneDeep(entities[id]);
  }
  return null;
}

function getEntitiesByIds(entities, ids) {
  const returnedEntities = [];
  if (isObjectLike(entities) && isArray(ids)) {
    ids.forEach(id => {
      if (!isNil(entities[id])) {
        returnedEntities.push(cloneDeep(entities[id]));
      }
    })
  }
  return returnedEntities;
}

function filterEntities(entities, filter) {
  // custom search
  return {};
}

export default {
  methods: {
    getEntityById,
    getEntitiesByIds,
    filterEntities
  }
}

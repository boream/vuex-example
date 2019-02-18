<template>
  <md-card>
    <md-card-header>
      <h1>Welcome Recipes</h1>
    </md-card-header>
    <md-list>
      <ingredient></ingredient>
    </md-list>
  </md-card>
</template>
<script>
import Ingredient from './components/ingredient';
import { upsertEntityAction } from '../shared-store/types';

export default {
  name: 'app-recipes',
  components: {
    Ingredient
  },
  beforeCreate() {
    this.$store.registerModule('recipes', )
  },
  methods: {
    createNewIngredient() {
      this.$store.dispatch('')
    }
  }
};
</script>

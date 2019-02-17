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

export default {
  name: 'app-recipes',
  components: {
    Ingredient
  }
};
</script>

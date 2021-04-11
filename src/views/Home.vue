<template>
  <div class="home">
    <v-app-bar>
      <img
        src="../assets/vue-eat.svg"
        alt="Vue Eat"
        class="vue-eat-logo"
      />

      <FilterArea v-if="$route.name === 'Home'" />
    </v-app-bar>

    <v-main>
      <RestaurantCardList />
    </v-main>
  </div>
</template>

<script>
import RestaurantCardList from '@/components/RestaurantCardList.vue';
import FilterArea from '../components/FilterArea.vue';

export default {
  name: 'Home',

  components: {
    RestaurantCardList,
    FilterArea,
  },
};
</script>

<style lang="scss" scoped>
.vue-eat-logo {
  max-width: 100px;
}
</style>

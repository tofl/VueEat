<template>
  <div class="restaurant-list">
    <grid-layout
      :options="{
        isConstantSize: false,
        transitionDuration: 0.1,
      }"
      :layoutOptions="{
        margin: 10,
        align: 'center'
      }"
    >
      <RestaurantCard
        v-for="n in 10"
        :key="n"
        class="item"
      />
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout } from '@egjs/vue-infinitegrid';
import RestaurantCard from './RestaurantCard.vue';

export default {
  name: 'RestaurantList',

  components: {
    RestaurantCard,
    GridLayout,
  },
};
</script>

<style lang="scss" scoped>
</style>

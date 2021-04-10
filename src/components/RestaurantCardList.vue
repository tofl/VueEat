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
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
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

  data() {
    return {
      restaurants: null,
    };
  },

  mounted() {
    this.$api.get('/businesses/search?term=restaurants&location=Lyon')
      .then(({ data }) => {
        this.restaurants = data.businesses;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>

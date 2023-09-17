<template>
  <article>
    <h1>Restaurants</h1>
    <ul>
      <li v-for="restaurant in viewModel.restaurants">
        <h3>
          {{ restaurant.name }}
        </h3>
        <p>
          {{ restaurant.description }}
        </p>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const presenter = useRestaurantsPresenter();

await presenter.loadRestaurants();

const viewModel = presenter.getViewModel();

// const result = await useFetch("http://localhost:1337/api/restaurants");

// const restaurants = result.data.value.data;
</script>

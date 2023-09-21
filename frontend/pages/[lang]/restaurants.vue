<template>
  <article>
    <h1>Restaurants</h1>
    <ul>
      <li v-for="restaurant in viewModel.restaurants">
        <h3>
          {{ restaurant.name }}
        </h3>
        <section
          v-if="restaurant.descriptionHtml"
          v-html="restaurant.descriptionHtml"
        ></section>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
console.log("HIT");

const presenter = useRestaurantsPresenter();

await presenter.loadRestaurants();

const viewModel = await presenter.getViewModel();
</script>

<template>
  <article>
    <h1>Restaurants</h1>
    <ul>
      <li v-for="restaurant in restaurants">
        <h3>
          {{ restaurant.attributes.Name }}
        </h3>
        <p>
          {{ restaurant.attributes.Description }}
        </p>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const result = await useFetch("http://localhost:1337/api/restaurants");

const restaurants = result.data.value.data;
</script>

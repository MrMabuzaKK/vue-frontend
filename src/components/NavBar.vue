<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showNavBar = computed(() => {
  return route.name !== "login";
});
</script>

<template>
  <nav v-if="showNavBar">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'courses' }">Courses</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav>
</template>

<style scoped></style>

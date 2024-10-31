<template>
  <div>
    <h1>This is an courses page</h1>
    <ul>
      <li v-for="(course, index) in courses" :key="index">
        {{ course.name }}
      </li>
      <p v-if="isLoading">Loading...</p>
    </ul>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const courses = computed(() => store.state.courses);

const isLoading = computed(() => store.state.courses.length === 0);

const getuserCourses = async () => {
  try {
    await store.dispatch("getCourses");
  } catch (e) {
    console.log("i have errors");
    console.log(e);
    router.push({ name: "home" });
  }
};

onBeforeMount(async () => {
  console.log("I am mounted:: courses component");
  await getuserCourses();
});
</script>

<style scoped></style>

<template>
  <div class="home">
    <p v-if="username">You are logged in as {{ username }}</p>
    <DashboardView />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
// @ is an alias to /src
import DashboardView from "./Dashboard/DashboardView.vue";

const router = useRouter();
const store = useStore();

const username = computed(() => store.state.username);

const getUser = async () => {
  try {
    await store.dispatch("getUserToken");
  } catch (e) {
    console.log("i have errors");
    router.push({ name: "login" });
  }
};

onBeforeMount(async () => {
  console.log("I am mounted");
  await getUser();
});
</script>

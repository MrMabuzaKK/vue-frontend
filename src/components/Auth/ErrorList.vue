<script>
export default {
  name: "ErrorList",
  props: {
    errors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="mb-4" v-if="errors.length > 0 && errors[0] !== null">
    <div class="font-medium text-danger">Whoops! Something went wrong.</div>
    <ul class="mt-3 list-disc text-sm text-danger pl-4">
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

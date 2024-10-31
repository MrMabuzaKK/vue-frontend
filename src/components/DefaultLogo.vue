<script>
export default {
  name: "DefaultLogo",
  props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<template>
  <div class="logo-box">
    <img
      class="logo fill-current text-gray-500"
      src="../assets/tagmarshal_logo.svg"
      alt="logo"
      :style="styles.logo"
    />
  </div>
</template>

<script>
import props from "@/props/DefaultInputProps.js";
export default {
  name: "DefaultInput",
  props: props,
};
</script>

<template>
  <div class="input-field">
    <label :for="id" :style="styles.inputLabel">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
      :minlength="minlength"
      :title="title"
      :style="styles.input"
      class="form-control"
    />
  </div>
</template>

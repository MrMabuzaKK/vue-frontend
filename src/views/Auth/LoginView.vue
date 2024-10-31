<script setup>
import useLogin from "@/scripts/Auth/LoginView.js";
import styles from "@/styles/Auth/LoginViewStyle.js";
import DefaultInput from "@/components/Auth/Form/DefaultInput.vue";
import DefaultLogo from "@/components/DefaultLogo.vue";
import ErrorList from "@/components/Auth/ErrorList.vue";

const { email, password, checkbox, errors, handleSubmit } = useLogin();
</script>

<template>
  <div v-bind:style="styles.wrapper">
    <div class="login-box" v-bind:style="styles.loginBox">
      <DefaultLogo :styles="styles" />
      <div class="card" v-bind:style="styles.cardContainer">
        <div v-bind:style="styles.cardBody">
          <ErrorList :errors="errors" />
          <form @submit.prevent="handleSubmit">
            <DefaultInput
              id="email"
              label="Username"
              type="email"
              v-model="email"
              title="Please fill out this field."
              :required="true"
              :minlength="1"
              :styles="styles"
            />
            <DefaultInput
              id="password"
              label="Password"
              type="password"
              v-model="password"
              title="Please fill out this field."
              :required="true"
              :minlength="1"
              :styles="styles"
            />
            <div v-bind:style="styles.checkContainer">
              <input
                type="checkbox"
                id="remember"
                v-model="checkbox"
                v-bind:style="styles.inputCheck"
              />
              <label for="remember" v-bind:style="styles.inputLabel"
                >Remember me</label
              >
            </div>
            <div v-bind:style="styles.buttonContainer">
              <button
                type="submit"
                v-bind:style="styles.submitBtn"
                class="btn btn-block"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn-block:hover {
  background-color: rgba(31, 41, 55, 0.93) !important;
}
</style>

import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

export default function useLogin() {
  const router = useRouter();
  const store = useStore();

  const email = ref(store.state.rememberMeEmail);
  const password = ref(store.state.rememberMePassword);
  const checkbox = ref(!!store.state.rememberMeEmail);
  const errors = computed(() => store.state.loginErrors);
  const userToken = computed(() => store.state.token);

  watch(userToken, (newToken) => {
    if (newToken) {
      router.push({ name: "home" });
    }
  });

  const handleSubmit = async () => {
    const data = {
      email: email.value,
      password: password.value,
    };

    try {
      await store.dispatch("login", data);

      if (checkbox.value) {
        store.commit("SET_REMEMBER_ME", {
          email: email.value,
          password: password.value,
        });
      } else {
        store.commit("CLEAR_REMEMBER_ME");
      }
    } catch (e) {
      console.log("i have errors");
    }
  };

  return {
    email,
    password,
    checkbox,
    errors,
    handleSubmit,
  };
}

import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    loginErrors: [],
    username: null,
    courses: [],
    rememberMeEmail: localStorage.getItem("rememberMeEmail") || "",
    rememberMePassword: localStorage.getItem("rememberMePassword") || "",
  },
  getters: {},
  mutations: {
    SET_USER_TOKEN(state, token) {
      localStorage.setItem("user_token", token);
      state.token = token;
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    SET_LOGIN_ERROR(state, message) {
      state.loginErrors = [message];
    },
    SET_USERNAME(state, name) {
      state.username = name;
    },
    SET_COURSES(state, courses) {
      state.courses = courses;
    },
    SET_REMEMBER_ME(state, { email, password }) {
      localStorage.setItem("rememberMeEmail", email);
      localStorage.setItem("rememberMePassword", password);
      state.rememberMeEmail = email;
      state.rememberMePassword = password;
    },
    CLEAR_REMEMBER_ME(state) {
      localStorage.removeItem("rememberMeEmail");
      localStorage.removeItem("rememberMePassword");
      state.rememberMeEmail = "";
      state.rememberMePassword = "";
    },
  },
  actions: {
    async login({ commit }, data) {
      const url = process.env.VUE_APP_API_URL + "/tm/login";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const response = await axios.post(url, data, config);
        commit("SET_USER_TOKEN", response.data.token);
        commit("SET_LOGIN_ERROR", null);
      } catch (error) {
        console.log(error);
        commit(
          "SET_LOGIN_ERROR",
          error.response?.data?.message || "Login failed"
        );
      }
    },
    async logout({ commit }) {
      commit("SET_USER_TOKEN", null);
      localStorage.removeItem("user_token");
    },
    async getUserToken({ commit }) {
      const token = localStorage.getItem("user_token");
      const url = process.env.VUE_APP_API_URL + "/tm/users";
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await axios.get(url, config);
      commit("SET_USER_TOKEN", token);
      commit("SET_LOGIN_ERROR", null);
      commit("SET_USERNAME", response.data.name);
    },
    async getCourses({ commit }) {
      const url = process.env.VUE_APP_API_URL + "/tm/courses";
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("user_token"),
        },
      };

      const response = await axios.get(url, config);
      commit("SET_COURSES", response.data);
    },
  },
  modules: {},
});

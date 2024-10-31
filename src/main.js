import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte.min.js";

createApp(App).use(store).use(router).mount("#app");

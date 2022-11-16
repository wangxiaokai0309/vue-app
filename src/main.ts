import "./public-path";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance: FREE = null;
function render(props = {}) {
  const { container } = props as Record<string, FREE>;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app-vue/" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(): Promise<void> {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: Record<string, FREE>): Promise<void> {
  console.log("[vue] props from main framework", props);
  render(props);
}
export async function unmount(): Promise<void> {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}

/*
 * @Author: Yanc
 * @Date: 2023-03-05 21:56:05
 * @LastEditTime: 2023-03-05 21:59:21
 */
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ArcoVue);
});

import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

/**
 * vue-router
 */
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from "../src/views/HomeView.vue"
import UbuntuView from "../src/views/UbuntuView.vue"
import ProgramasView from "../src/views/ProgramsViews.vue"
import Windows10View from "../src/views/Windows10View.vue"

const routes = [
  { path: '/', component: HomeView },
  { path: '/ubuntu', component: UbuntuView },
  { path: '/programas', component: ProgramasView },
  { path: '/windows10', component: Windows10View },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


const app = createApp(App);
app.use(router);
app.mount('#app');

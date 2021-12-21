import { createApp } from 'vue';
import App from './App.vue';
import { store } from './vuex/store';
import { createRouter, createWebHistory } from 'vue-router';
import Homepage from './pages/homepage';
import CreatePage from './pages/create';

const app = createApp(App);

app.use(store);

const routes = [
  {
    path: '/',
    component: Homepage,
    name: 'homepage',
  },
  {
    path: '/create',
    component: CreatePage,
    name: 'create-nft',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history',
});

app.use(router);
app.mount('#app');

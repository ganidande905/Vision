import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blogs from '../views/Contact.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Blogs },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import Blogs from '../views/Blogs.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/blog', component: Blogs },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

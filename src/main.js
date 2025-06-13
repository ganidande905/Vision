import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { SpeedInsights } from "@vercel/speed-insights/next";

const app = createApp(App);
app.use(router);
app.use(SpeedInsights);
app.mount('#app');

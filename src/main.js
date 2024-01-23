import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

// Stvorite Pinia instancu
const pinia = createPinia();

// Upotrijebite Pinia store u vašoj aplikaciji
app.use(router).use(pinia).mount('#app');

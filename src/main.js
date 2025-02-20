import './style.css';

import { createApp } from 'vue';

import { MotionPlugin } from '@vueuse/motion';
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue';

const app = createApp(App)
app.use(Vue3Marquee)
app.use(MotionPlugin)

app.mount('#app')

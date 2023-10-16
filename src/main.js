import {createSSRApp} from "vue";
import App from "./App.vue";
import { createStore } from 'vuex';
import store from './store/store.js';


export function createApp() {
    const app = createSSRApp(App);

    // Use the Vuex store
    app.use(store); // Add the store to your app

    return {
        app,
    };
}

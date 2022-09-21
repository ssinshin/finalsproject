import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from 'firebase/app'


loadFonts()

const firebaseConfig = {
  apiKey: "AIzaSyB2rODR9xDExxQOGafngxm3-hagCNb6hfw",
  authDomain: "projectfirebase-27cde.firebaseapp.com",
  projectId: "projectfirebase-27cde",
  storageBucket: "projectfirebase-27cde.appspot.com",
  messagingSenderId: "556710935829",
  appId: "1:556710935829:web:c140ba06cb0d473c15fd1c"
};

initializeApp(firebaseConfig);

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

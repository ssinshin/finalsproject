<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light">Calista Francine Crujido </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn flat color="grey" @click="handleSignOut" v-if="isLoggedIn" >
        <span>Sign Out</span>
      </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>



<script setup>
  import { ref, onMounted } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";
const router = useRouter();
const isLoggedIn = ref(false);
const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Math', icon: 'mdi-plus-one', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
           { title: 'Vuetify', icon: 'mdi-vuejs', path: '/vuetifyApp'},
           { title: 'About Me', icon: 'mdi-account', path: '/aboutmeApp'},
           { title: 'Quiz Demo', icon: 'mdi-forum', path: '/axios'},
           { title: 'About Project', icon: 'mdi-information', path: '/project'},
           { title: 'Create an Account', icon: 'mdi-account-plus', path: '/usercreateApp'},
           { title: 'Sign In', icon: 'mdi-login', path: '/signinApp'},
        ])

        let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
      const info = user.email;
      console.log(info);
    } else {
      isLoggedIn.value = false;
      console.log("not logged in");
    }
  });
});
function toggleDrawer() {
  return (drawer.value = !drawer.value);
}
const handleSignOut = () => {
  signOut(auth).then(() => {
    logOutSuccess();
    router.push("/signIn");
  });
};
function logOutSuccess() {
  // Swal.fire({
  //   position: "center",
  //   icon: "success",
  //   title: "You logged out",
  //   text: "Thank you for playing",
  //   showConfirmButton: false,
  //   timer: 3000,
  // });
}

 
</script>
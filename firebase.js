import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
    apiKey: "AIzaSyB2rODR9xDExxQOGafngxm3-hagCNb6hfw",
    authDomain: "projectfirebase-27cde.firebaseapp.com",
    projectId: "projectfirebase-27cde",
    storageBucket: "projectfirebase-27cde.appspot.com",
    messagingSenderId: "556710935829",
    appId: "1:556710935829:web:c140ba06cb0d473c15fd1c"
  };
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
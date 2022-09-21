<template>
    <v-container fluid class="">

        <v-card color="#FCE4EC" class="border-rounded mx-auto" style="width: 600px">
            <img alt="Register" src="/public/register.png" width="600" height="200"/>

            <v-container>
                <v-card-text class="text-body-1 font-weight-bold mb-5">
                    Please enter an email and password</v-card-text>
                <v-text-field type="text" placeholder="Email" v-model="email"></v-text-field>
                <v-text-field type="password" placeholder="Password" v-model="password"></v-text-field>
                <v-btn @click="register" class="text-white me-3" color="blue-grey-darken-1">Register</v-btn>
                <!-- <v-btn @click="signInWithGoogle" class="text-blue me-3" color="">Google Sign in</v-btn> -->
               <!-- // <v-btn @click="loadUsers" class="" color="">load users console</v-btn> -->
            </v-container>
        </v-card>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { getFirestore, collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";

const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const userRef = collection(db, "users");

function register() {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // addDoc(userRef, { email: email.value, score: 0 });
            setDoc(doc(db, "users", email.value), { email: email.value, score: 0 });
            registerSuccess();
            router.push("/axiosDemo");
        })
        .catch((error) => {
            registerFailed(error);
        });
}
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            registerSuccess();
            router.push("/axiosDemo");
        })
        .catch((error) => {
            registerFailed(error);
        });
}

function registerSuccess() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Registered successfully",
        text: "You can now play the quiz!",
        showConfirmButton: true,
        timer: 5000,
    });
}
function registerFailed(error) {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Registration failed",
        text: error.message,
        showConfirmButton: true,
        timer: 5000,
    });
}
function loadUsers() {
    getDocs(userRef).then((snap) => {
        snap.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
        });
    });
}
</script>
<style scoped>

</style>
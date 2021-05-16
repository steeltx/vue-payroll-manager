<template>
  <div>
    <h1>Estamos en la home</h1>
    <button @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { auth } from "../utils/firebase";
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      auth.onAuthStateChanged((user) => {
        console.log(user);
      });
    });

    const logout = () => {
      auth.signOut();
    };

    return {
      logout,
    }
  },
};
</script>

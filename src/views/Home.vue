<template>
  <div>
    <h1>Estamos en la home</h1>
    <button class="ui button">
      Follow
    </button>
    <button class="ui primary button">
      Save
    </button>
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
  },
};
</script>

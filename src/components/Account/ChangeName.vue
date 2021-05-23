<template>
  <form class="ui form change-name">
    <input type="text" placeholder="Nombre y apellidos" />
    <button type="submit" class="ui button primary">Actualizar</button>
  </form>
</template>

<script>
export default {
  name: "ChangeName",
};
</script>

<style lang="scss" scoped>
.ui.form.change-name {
  text-align: center;
  input.error {
      border-color: #faa;
      background-color: #ffeded;
  }
  .ui.button{
      margin: 20px 0 0 0;
  }
}
</style>

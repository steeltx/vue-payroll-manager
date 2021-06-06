<template>
  <form class="ui form change-password">
    <div class="three fields">
      <div class="field">
        <input type="password" placeholder="Contraseña actual" />
      </div>
      <div class="field">
        <input type="password" placeholder="Nueva contraseña" />
      </div>
      <div class="field">
        <input type="password" placeholder="Repite contraseña" />
      </div>
    </div>
    <button type="submit" class="ui button primary">
      Actualizar
    </button>
  </form>
</template>

<script>
export default {
  name: "ChangePassword",
};
</script>

<style lang="scss" scoped>
.ui.form.change-password {
  text-align: center;

  input.error {
    border-color: #faa;
    background-color: #ffeded;
  }

  .ui.button {
    margin: 20px 0 0 0;
  }
}
</style>

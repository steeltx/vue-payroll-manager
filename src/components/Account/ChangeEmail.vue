<template>
  <form class="ui form change-email">

      <div class="two fields">
          <div class="field">
              <input type="text" placeholder="Nuevo email">
          </div>
          <div class="field">
              <input type="password" placeholder="Contraseña actual">
          </div>
      </div>
      <button type="submit" class="ui button primary">
          Actualizar
      </button>

  </form>
</template>

<script>
export default {
    title:"ChangeEmail"
}
</script>

<style lang="scss" scoped>
    .ui.form.change-email{
        text-align: center;
        input.error{
            border-color: #faa;
            background-color: #ffeded;
        }

        .ui.button{
            margin: 20px 0 0 0;
        }
    }
</style>
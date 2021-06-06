<template>
  <div class="upload-payroll">
    <button class="ui button primary">
      Nueva nomina
    </button>
    <form class="ui form upload-payroll__form">
      <div class="field">
        <label for="file" class="ui icon button">
          <i class="file icon"></i>
          Seleccionar nomina
        </label>
        <input type="file" id="file" style="display:none" />
      </div>
      <div class="field">
        <div class="ui calendar">
          <div class="ui input left icon">
            <input type="date" />
          </div>
        </div>
      </div>
      <button class="ui button positive">
        Subir nomina
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UploadPayroll",
};
</script>

<style lang="scss" scoped>
.upload-payroll {
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>

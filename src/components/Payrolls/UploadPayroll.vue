<template>
  <div class="upload-payroll">
    <button class="ui button primary" @click="showCloseForm">
      Nueva nomina
    </button>
    <form class="ui form upload-payroll__form" :class="{ open: showForm }">
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
import { ref } from "vue";
export default {
  name: "UploadPayroll",
  setup() {
    let showForm = ref(false);

    const showCloseForm = () => {
      showForm.value = !showForm.value;
    };

    return {
      showForm,
      showCloseForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.upload-payroll {
  > .ui.button.primary {
    margin-bottom: 30px;
  }
  &__form {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;

    &.open {
      height: 200px;
    }
  }
}
</style>

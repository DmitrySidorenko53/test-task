<template>
  <v-text-field
      :rules="[rules.required]"
      type="date"
      variant="solo"
      class="w-100"
      label="Дата начала действия"
      density="compact"
      clearable
  >
  </v-text-field>
</template>

<script>
export default {
  name: "StartDateInput",
  data: () => ({
    rules: {
      required: v => !!v || 'Обязательное поле',
    }
  })
}
</script>

<style scoped>

</style>
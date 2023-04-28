<template>
  <v-text-field
      :rules="[rules.required]"
      type="date"
      variant="solo"
      class="w-100"
      label="Дата окончания действия"
      density="compact"
      clearable
  >
  </v-text-field>
</template>

<script>
export default {
  name: "EndDateInput",
  data: () => ({
    rules: {
      required: v => !!v || 'Обязательное поле',
    }
  })
}
</script>

<style scoped>

</style>
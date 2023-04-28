<template>
  <v-text-field
      :rules="[rules.required, rules.length]"
      variant="solo"
      density="compact"
      class="w-100"
      label="Наименование"
      clearable
  >
  </v-text-field>
</template>

<script>
export default {
  name: "TitleInput",
  data: () => ({
    rules: {
      required: v => !!v || 'Обязательное поле',
      length: v => (v.length >= 5 && v.length <= 50) ||
          'Длина наименования должна быть 5-50 символов',
    }
  })
}
</script>

<style scoped>

</style>
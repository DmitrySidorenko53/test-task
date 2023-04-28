<template>
  <v-select
      label="Выберите справочник"
      variant="solo"
      density="compact"
      :items="dictionaries"
      v-model="selectedDictionary"
      class="w-100"
  >
  </v-select>
</template>

<script>
export default {
  name: "DictionarySelect",
  data: () => ({
    dictionaries: [
      'Справочник пользователей',
      'Справочник экспертных организаций',
      'Справочник видов экспертиз',
      'Справочник типов экспертиз',
      'Справочник этапов экспертизы',
    ],
    selectedDictionary: ''
  })
}
</script>

<style scoped>

</style>
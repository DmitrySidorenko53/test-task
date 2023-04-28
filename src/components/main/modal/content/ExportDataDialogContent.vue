<template>
  <v-card class="pa-6">
    <v-card-title class="font-weight-bold">
      Выберите формат для выгрузки данных
    </v-card-title>
    <v-form>
      <v-card-text class="mb-6">
        <v-item-group
            v-model="selectedFormat"
            selected-class="bg-indigo-darken-3"
        >
          <v-item v-for="(format, i) in formats"
                  :key="i"
                  v-slot="{ selectedClass, toggle }">
            <v-btn :class="selectedClass"
                   @click="toggle"
                   class="me-4 my-2"
                   variant="tonal"
            >
              {{ format }}
            </v-btn>
          </v-item>
        </v-item-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="text-none bg-indigo-darken-2"
               type="submit"
        >
          Выгрузить
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "ExportDataDialogContent",
  data: () => ({
    formats: [
      'DOCX', 'PDF', 'XLSX'
    ],
    selectedFormat: ''
  })
}
</script>

<style scoped>

</style>
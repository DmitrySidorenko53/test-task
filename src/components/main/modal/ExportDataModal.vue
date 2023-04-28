<template>
  <v-btn
      color="indigo-darken-2"
      icon="mdi-download"
      size="small"
      @click="showExportDataDialog = true"
      class="me-2"
  >
  </v-btn>

  <v-dialog
      v-model="showExportDataDialog"
      max-width="500"
  >
    <ExportDataDialogContent/>
  </v-dialog>
</template>

<script>
import ExportDataDialogContent from "@/components/main/modal/content/ExportDataDialogContent";
export default {
  name: "ExportDataModal",
  components: {ExportDataDialogContent},
  data: () => ({
    showExportDataDialog: false,
  })
}
</script>

<style scoped>

</style>
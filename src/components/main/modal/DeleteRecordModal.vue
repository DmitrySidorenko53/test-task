<template>
  <v-btn
      color="indigo-darken-2"
      icon="mdi-delete-outline"
      class="me-2"
      size="small"
      @click="showDeleteRecordDialog = true"
  >
  </v-btn>
  <v-dialog
      v-model="showDeleteRecordDialog"
      max-width="400"
  >
    <DeleteRecordDialogContent/>
  </v-dialog>
</template>

<script>
import DeleteRecordDialogContent from "@/components/main/modal/content/DeleteRecordDialogContent";
export default {
  name: "DeleteRecordModal",
  components: {DeleteRecordDialogContent},
  data: () => ({
    showDeleteRecordDialog: false,
  })
}
</script>

<style scoped>

</style>
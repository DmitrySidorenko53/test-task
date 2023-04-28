<template>
  <v-btn
      color="indigo-darken-2"
      icon="mdi-pencil"
      class="me-2"
      size="small"
      @click="showEditRecordDialog =true"
  ></v-btn>
  <v-dialog v-model="showEditRecordDialog" width="500">
    <EditRecordDialogContent/>
  </v-dialog>
</template>

<script>
import EditRecordDialogContent from "@/components/main/modal/content/EditRecordDialogContent";

export default {
  name: "EditRecordModal",
  components: {EditRecordDialogContent},
  data: () => ({
    showEditRecordDialog: false,
  })
}
</script>

<style scoped>

</style>
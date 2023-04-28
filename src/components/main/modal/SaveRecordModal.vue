<template>
  <v-btn
      color="indigo-darken-2"
      icon="mdi-plus"
      size="small"
      @click="showSaveRecordDialog = true"
      class="me-2"
  >
  </v-btn>
  <v-dialog
      v-model="showSaveRecordDialog"
      max-width="500"
  >
    <SaveRecordDialogContent/>
  </v-dialog>
</template>

<script>
import TitleInput from "@/components/controls/TitleInput";
import SaveRecordDialogContent from "@/components/main/modal/content/SaveRecordDialogContent";

export default {
  name: "SaveRecordModal",
  components: {SaveRecordDialogContent, TitleInput},
  data: () => ({
    showSaveRecordDialog: false,
  })
}
</script>

<style scoped>

</style>
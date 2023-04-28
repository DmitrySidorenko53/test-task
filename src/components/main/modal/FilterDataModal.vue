<template>
  <v-btn
      color="indigo-darken-2"
      icon="mdi-filter"
      size="small"
      @click.stop="showFilterDataDialog = true"
  >
  </v-btn>
  <v-dialog
      v-model="showFilterDataDialog"
      width="500"
  >
    <FilterDataDialogContent/>
  </v-dialog>
</template>

<script>
import FilterDataDialogContent from "@/components/main/modal/content/FilterDataDialogContent";
export default {
  name: "FilterDataModal",
  components: {FilterDataDialogContent},
  data: () => ({
    showFilterDataDialog: false
  })
}
</script>

<style scoped>

</style>
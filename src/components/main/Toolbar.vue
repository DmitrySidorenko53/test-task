<template>
  <v-container fluid class="py-0">
    <v-row class="py-6 ma-0">
      <v-col class="py-0" cols="12" sm="7">
        <DictionarySelect/>
      </v-col>
      <v-col class="py-0" cols="12" sm="5">
        <SaveRecordModal/>
        <EditRecordModal/>
        <DeleteRecordModal/>
        <ExportDataModal/>
        <FilterDataModal/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SaveRecordModal from "@/components/main/modal/SaveRecordModal";
import ExportDataModal from "@/components/main/modal/ExportDataModal";
import DictionarySelect from "@/components/controls/DictionarySelect";
import FilterDataModal from "@/components/main/modal/FilterDataModal";
import DeleteRecordModal from "@/components/main/modal/DeleteRecordModal";
import EditRecordModal from "@/components/main/modal/EditRecordModal";

export default {
  name: "Toolbar",
  components: {EditRecordModal, DeleteRecordModal, FilterDataModal, DictionarySelect, ExportDataModal, SaveRecordModal},
}
</script>

<style scoped>

</style>
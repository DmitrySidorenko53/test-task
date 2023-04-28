<template>
  <v-card class="pa-10">
    <v-card-title class="pa-0 font-weight-bold">Сохранение записи</v-card-title>
    <v-form>
      <v-card-text class="px-0">
        <TitleInput/>
        <v-row>
          <v-col>
            <StartDateInput/>
          </v-col>
          <v-col>
            <EndDateInput/>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="tonal" class="text-none"
               type="reset"
        >
          Отменить
        </v-btn>
        <v-btn class="text-none bg-indigo-darken-2"
               type="submit"
        >
          Сохранить
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import TitleInput from "@/components/controls/TitleInput";
import StartDateInput from "@/components/controls/StartDateInput";
import EndDateInput from "@/components/controls/EndDateInput";

export default {
  name: "SaveRecordDialogContent",
  components: {EndDateInput, StartDateInput, TitleInput},
}
</script>

<style scoped>

</style>
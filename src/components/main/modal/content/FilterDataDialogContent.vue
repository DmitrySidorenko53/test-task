<template>
  <v-card class="pa-6">
    <v-card-title class="font-weight-bold">
      Фильтры
    </v-card-title>
    <v-form>
      <v-card-text>
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
        <v-spacer>
        </v-spacer>
        <v-btn variant="tonal" class="text-none"
               type="reset"
        >
          Очистить
        </v-btn>
        <v-btn class="text-none bg-indigo-darken-2"
               type="submit"
        >
          Применить
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import TitleInput from "@/components/controls/TitleInput";
import EndDateInput from "@/components/controls/EndDateInput";
import StartDateInput from "@/components/controls/StartDateInput";
export default {
  name: "FilterDataDialogContent",
  components: {StartDateInput, EndDateInput, TitleInput}
}
</script>

<style scoped>

</style>
<template>
  <v-card class="pa-10">
    <v-card-title class="pa-0 font-weight-bold text-center">
      Удалить запись?
    </v-card-title>
    <v-card-text></v-card-text>
    <v-form>
      <v-card-actions>
        <v-row justify="space-around">
          <v-col class="text-center">
            <v-btn variant="tonal" class="text-none"
                   type="reset">
              Нет
            </v-btn>
          </v-col>
          <v-col class="text-center">
            <v-btn class="text-none bg-indigo-darken-2"
                   type="submit">
              Да
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "DeleteRecordDialogContent"
}
</script>

<style scoped>

</style>
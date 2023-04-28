<template>
  <v-card elevation="0">
    <v-card-actions>
      <v-btn variant="text" class="text-none text-h6">Экспертизы</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" :icon="showMoreAboutExpertise ? 'mdi-chevron-up' : 'mdi-chevron-down'"
             @click="showMoreAboutExpertise = !showMoreAboutExpertise">
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card-text v-show="showMoreAboutExpertise" class="py-0 px-3">
        <v-list density="compact" class="pt-0">
          <v-list-item
              v-for="([title, icon], i) in expertises"
              :key="i"
              :value="title">
            <template v-slot:prepend>
              <v-icon color="indigo-darken-2" :icon="icon" size="small">
              </v-icon>
            </template>
            <v-list-item-title v-text="title" class="">
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Expertises",
  data: () => ({
    showMoreAboutExpertise: true,
    expertises: [
      ['В работе', 'mdi-pencil-circle'],
      ['Завершенные', 'mdi-check-circle'],
      ['Таможенные', 'mdi-file-document-multiple'],
      ['Судебные по АП', 'mdi-file-document-multiple'],
      ['Судебные по УП', 'mdi-file-document-multiple'],
      ['Все', 'mdi-folder'],
    ],
  })
}
</script>

<style scoped>

</style>
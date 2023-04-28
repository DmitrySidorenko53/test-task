<template>
  <v-card elevation="0">
    <v-card-actions>
      <v-btn variant="text" class="text-none text-h6">Журналы</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" :icon="showMoreAboutJournal ? 'mdi-chevron-up' : 'mdi-chevron-down'"
             @click="showMoreAboutJournal = !showMoreAboutJournal">
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card-text v-show="showMoreAboutJournal" class="py-0 px-3">
        <v-list density="compact" class="pt-0">
          <v-list-item
              v-for="([title, icon], i) in journals"
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
  name: "Journals",
  data: () => ({
    showMoreAboutJournal: true,
    journals: [
      ['Решения', 'mdi-file-document'],
      ['Постановления', 'mdi-file-document'],
      ['Таможенные экспертизы (ТЭ)', 'mdi-file-document'],
      ['Судебные экспертизы (СЭ)', 'mdi-file-document'],
      ['Учет проб и (или) образцов', 'mdi-chart-box-outline'],
      ['Заключения по ТЭ', 'mdi-file-document'],
      ['Заключения по СЭ', 'mdi-file-document'],
      ['СНДЗ', 'mdi-file-document'],
      ['Акты', 'mdi-file-document'],
    ],
  })
}
</script>

<style scoped>

</style>
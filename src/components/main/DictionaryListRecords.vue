<template>
  <v-container class="px-4 py-0 mx-0" fluid>
    <v-table class="">
      <thead>
      <tr>
        <th v-for="title in titles">
          {{ title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="record in records" :key="record.id"
      >
        <td>
          <v-checkbox-btn :model-value="false" color="indigo-darken-3"></v-checkbox-btn>
        </td>
        <td>{{ record.title }}</td>
        <td>{{ record.id }}</td>
        <td>{{ record.startDate }}</td>
        <td>{{ record.endDate }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
<script>

export default {
  name: "DictionaryListRecords",
  data: () => ({
    titles: [
      'Выбрать', 'Наименование', 'Код', 'Дата начала действия',
      'Дата окончания действия'
    ],
    records: [
      {id: 1, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 2, title: 'Судебная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 3, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 4, title: 'Судебная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 5, title: 'Судебная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 6, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 7, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 8, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 9, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
      {id: 10, title: 'Таможенная экспертиза', startDate: '01.01.2023', endDate: '01.01.3000'},
    ],
    isInfoVisible: false
  })
}
</script>

<style scoped>

</style>
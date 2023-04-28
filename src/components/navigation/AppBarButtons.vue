<template>
  <v-btn v-for="(icon, i) in buttons"
         :key="i"
         icon
  >
    <v-icon :icon="icon"></v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "AppBarButtons",
  data: () => ({
    buttons: [
      'mdi-magnify',
      'mdi-plus-circle-outline',
      'mdi-bell-outline',
      'mdi-information-outline',
      'mdi-chart-box-outline',
      'mdi-help-circle-outline',
      'mdi-account-arrow-right-outline',
    ]
  })
}
</script>

<style scoped>

</style>
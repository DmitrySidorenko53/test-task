<template>
  <v-app-bar
      :elevation="3"
      color="indigo-darken-2"
  >
    <v-app-bar-nav-icon
        @click.stop="isDrawerVisible = !isDrawerVisible"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>
      {{ user }}
    </v-app-bar-title>
    <template v-slot:append>
      <AppBarButtons/>
    </template>
  </v-app-bar>
  <v-navigation-drawer
      v-model="isDrawerVisible"
      location="left"
      permanent
      :width="isDrawerVisible ? 335 : 0"
      elevation="3"
  >
    <Expertises/>
    <v-divider></v-divider>
    <Journals/>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script>
import Expertises from "@/components/navigation/Expertises";
import Journals from "@/components/navigation/Journals";
import AppBarButtons from "@/components/navigation/AppBarButtons";

export default {
  name: "Navigation",
  components: {AppBarButtons, Journals, Expertises},
  data: () => ({
    isDrawerVisible: true,
    user: 'Администратор Авин Андрей Александрович'
  })
}
</script>

<style scoped>

</style>
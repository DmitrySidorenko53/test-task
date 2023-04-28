<template>
  <v-app>
    <Navigation/>
    <v-main class="ma-6">
      <v-card elevation="3" height="100%">
        <v-card-title>
          <Toolbar/>
        </v-card-title>
        <v-card-text>
          <DictionaryListRecords/>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/navigation/Navigation";
import Toolbar from "@/components/main/Toolbar";
import DictionaryListRecords from "@/components/main/DictionaryListRecords";

export default {
  name: 'App',
  components: {DictionaryListRecords, Toolbar, Navigation}
}
</script>

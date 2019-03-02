<template>
  <v-toolbar app dark>
    <v-toolbar-title class="headline">
      <span>theBookAlley</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest</span>
      <v-icon>open_in_new</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
</style>
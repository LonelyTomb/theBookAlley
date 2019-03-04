<template>
  <v-toolbar app dark>
    <v-toolbar-title primary-title>
      <v-btn :to="{name:'home'}" flat class="text-capitalize black darken-4" dark tag="a">
        <h1>theBookAlley</h1>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat :to="{name:'bookshelf'}">
      <span class="mr-2">BookShelf</span>
      <!-- <v-icon>open_in_new</v-icon> -->
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
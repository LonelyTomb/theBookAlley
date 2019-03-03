<template>
  <v-dialog v-model="$store.state.loader" hide-overlay persistent width="300">
    <v-card color="blue darken-4" dark>
      <v-card-text>Searching For Books
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style>
</style>

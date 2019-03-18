<template>
  <v-dialog v-model="$store.getters.loaderState" hide-overlay persistent width="300">
    <v-card color="blue darken-4" dark>
      <v-card-text>
        {{$store.getters.loaderMessage.message}}
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Loader",
  props: {
    message: {
      type: String,
      default: "Searching For Books"
    }
  }
};
</script>

<style>
</style>

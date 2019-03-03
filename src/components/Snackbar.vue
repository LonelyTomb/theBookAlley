<template>
  <v-snackbar
    v-model="$store.state.snackBar"
    :multi-line="multiLine"
    :timeout="timeout"
    :top="true"
  >
    {{ text }}
    <v-btn color="pink" flat @click="$store.commit('toggleSnackBar')">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    text: {
      type: String
    },
    timeout: {
      type: Number,
      default: 6000
    },
    multiLine: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
</style>

<template>
  <v-snackbar
    v-model="$store.getters.snackBarState"
    :multi-line="multiLine"
    :timeout="timeout"
    :top="true"
  >
    {{ $store.getters.snackMessage.message }}
    <v-btn color="pink" flat @click="$store.dispatch('closeSnackBar')">Close</v-btn>
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

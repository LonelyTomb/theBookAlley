<template>
  <div class="text-xs-center">
    <v-progress-circular indeterminate :color="color" :size="size" :width="width"></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    color: {
      type: String,
      default: "success"
    },
    size: {
      type: Number,
      default: 100
    },
    width: {
      type: Number,
      default: 10
    }
  }
};
</script>

<style>
</style>

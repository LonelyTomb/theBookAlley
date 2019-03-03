<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-actions class="grey darken-3 justify-center">
        <span class="pr-1">&copy;{{new Date().getFullYear()}}</span>
        <span>
          <strong>Constructs</strong>
        </span>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
</style>
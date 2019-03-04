<template>
  <v-container v-if="this.books.length > 0" fluid grid-list-xl>
    <v-slide-y-transition>
      <v-layout row wrap>
        <Book v-for="book in books" :key="book.id" :book="book"></Book>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { api } from "../apiKey";
import Spinner from "./../components/Spinner";

export default {
  name: "BookShelf",
  data: () => ({
    books: [],
    allBooks: []
  }),
  async mounted() {
    const allBooks = await this.pouch("bookmarks").allDocs({
      include_docs: true,
      attachments: true
    });

    const { rows } = allBooks;
    this.books = rows.map(e => e.doc.book);
  },
  components: {
    Book: () => ({
      component: import("./../components/Book.vue"),
      loading: Spinner
    })
  },
  methods: {}
};
</script>

<style>
</style>

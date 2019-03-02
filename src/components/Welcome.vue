<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex>
        <v-form>
          <v-layout row justify-center>
            <v-flex md6>
              <v-text-field label="search" clearable solo single-line v-model="bookName"></v-text-field>
            </v-flex>
            <v-btn color="success" @click.prevent="findBook(bookName)">Find</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
    <v-container v-if="this.books.length > 0" fluid grid-list-xl>
      <v-layout row wrap>
        <Book v-for="book in books" :key="book.id" :book="book"></Book>
      </v-layout>
    </v-container>
    <v-container v-else fluid>
      <v-layout row justify-center wrap align-center>
        <v-flex>
          <v-card>
            <v-card-title>
              <h3 class>No Books Found</h3>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { api } from "../apiKey";

export default {
  name: "Welcome",
  components: {
    Book: () => import("./Book")
  },
  data: () => ({
    bookName: "",
    books: []
  }),
  mounted() {},
  methods: {
    async findBook(bookName) {
      const bookData = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: bookName,
            key: api
          }
        }
      );
      const {
        data: { items },
        status
      } = await bookData;
      this.books = items;
      console.log(items, status);
    }
  }
};
</script>

<style scoped>
</style>
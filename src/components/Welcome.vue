<template>
  <v-container fluid>
    <SnackBar :text="message"/>

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
    <Loader/>
    <v-container v-if="this.books.length > 0" fluid grid-list-xl>
      <v-slide-y-transition>
        <v-layout row wrap>
          <Book v-for="book in books" :key="book.id" :book="book"></Book>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
    <v-container v-else fluid>
      <v-fade-transition>
        <v-layout row justify-center wrap align-center>
          <v-flex>
            <v-card>
              <!-- <Spinner/> -->
              <v-card-title>
                <h3 class>No Books Found</h3>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-fade-transition>
    </v-container>
  </v-container>
</template>

<script>
import { api } from "../apiKey";
import Spinner from "./Spinner";
export default {
  name: "Welcome",
  components: {
    Loader: () => import("./Loader.vue"),
    SnackBar: () => import("./Snackbar.vue"),
    Book: () => ({
      component: import("./Book"),
      loading: Spinner
    })
  },
  data: () => ({
    message: "",
    bookName: "",
    books: [],
    toggleSB: true
  }),
  mounted() {},
  methods: {
    async findBook(bookName) {
      if (bookName == null || bookName.length == 0) {
        this.message = "Enter Book";
        this.$store.commit("toggleSnackBar");
        return;
      }
      this.$store.commit({
        type: "toggleBooksState",
        condition: loading
      });
      this.$store.commit("toggleLoader");

      try {
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
        } = bookData;

        this.$store.commit({
          type: "toggleBooksState",
          condition: loading
        });

        this.$store.commit("toggleLoader");

        this.books = items;
        // console.log(items, status);
      } catch (e) {
        this.$store.commit("toggleLoader");
      }
    }
  }
};
</script>

<style scoped>
</style>
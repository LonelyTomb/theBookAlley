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
            <v-btn
              color="purple darken-2"
              @click.prevent="findBook(bookName)"
              class="text-capitalize"
            >Find</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
    <Loader :message="message"/>
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
import { setTimeout } from "timers";

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
      // If Search Query is Empty, notify and quit
      if (bookName == null || bookName.length == 0) {
        //Toggle Loading Prompt
        this.$store.dispatch("displaySnackBar", {
          message: "Enter Book"
        });
        return;
      }

      // Save Searches Into DB
      try {
        const search = await this.pouch("search").post({
          name: bookName
        });
      } catch (e) {
        console.log(e);
      }

      // this.$store.commit({
      //   type: "toggleBooksState",
      //   condition: "loading"
      // });

      this.$store.dispatch({
        type: "displayLoader",
        message: "Searching for Books"
      }); //Toggle Loading Prompt

      //Find Book Using Google Books Api
      try {
        const bookData = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params: {
              q: bookName,
              maxResults: 40,
              key: api
            }
          }
        );

        if (bookData.data.totalItems == 0) {
          this.books = [];
          this.$store.dispatch({
            type: "displaySnackBar",
            message: "No Books Found"
          });
          return;
        }

        const {
          data: { items },
          status
        } = bookData;

        // this.$store.dispatch({
        //   type: "toggleBooksState",
        //   condition: "loading"
        // });

        this.books = items;
        // console.log(items, status);
      } catch (e) {
        this.$store.dispatch({
          type: "displaySnackBar",
          message: "Unable to Complete, Try Again"
        });
      }
    }
  }
};
</script>

<style scoped>
</style>
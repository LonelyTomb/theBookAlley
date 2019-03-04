<template>
  <v-flex md4>
    <Loader :message="message"/>
    <SnackBar :text="message"/>

    <v-card color="indigo darken-3" class="white--text" height="100%">
      <v-container fluid fill-height>
        <v-layout column justify-space-between fill-height class="colcl">
          <v-flex class="col1" grow>
            <v-layout row fill-height>
              <v-flex xs7>
                <v-card-title>
                  <div>
                    <div primary-title>
                      <h3>{{book.volumeInfo.title}}</h3>
                    </div>
                    <v-divider light></v-divider>
                    <v-spacer></v-spacer>
                    <div class="book-author">
                      <p>{{book.volumeInfo.authors.join(",") || "Not Available"}}</p>
                    </div>
                    <div class="book-publisher">
                      <p>
                        <i>{{book.volumeInfo.publisher}}</i>
                      </p>
                    </div>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5 grow>
                <v-layout column fluid justify-space-around fill-height>
                  <v-flex>
                    <v-img :src="book.volumeInfo.imageLinks.thumbnail || placeholder" contain></v-img>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex class="col2">
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              <v-btn
                flat
                :href="book.volumeInfo.infoLink"
                target="_blank"
                small
                class="white--text"
              >
                <span class="mr-2">View</span>
                <v-icon>open_in_new</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn small @click="saveBook(book)" flat v-if="findBook == false">
                <v-icon>save</v-icon>
              </v-btn>
              <v-btn small @click="remove(book)" flat v-else>
                <v-icon>delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "Book",
  props: {
    book: {
      type: Object
    }
  },
  components: {
    SnackBar: () => import("./Snackbar.vue"),
    Loader: () => import("./Loader.vue")
  },
  data: () => ({
    placeholder: "./../assets/placeholder.svg",
    message: ""
  }),
  mounted() {},
  methods: {
    async saveBook(book) {
      this.message = "Adding Book";
      this.$store.commit("toggleLoader");

      try {
        const getbook = await this.pouch("bookmarks").get(book.id);
        await this.pouch("bookmarks").put({
          _id: book.id,
          _rev: getbook._rev,
          book
        });

        this.$store.commit("toggleLoader");
        this.message = "Book Saved";
        this.$store.commit("toggleSnackBar");
      } catch (err) {
        console.log(err);
      }
    },
    async findBook(book) {
      try {
        const getBook = await this.pouch("bookmarks").get(book.id);
        if (getBook !== null) {
          return true;
        }
      } catch (err) {}
      return false;
    },
    async removeBook(book) {
      try {
        const getBook = await this.pouch("bookmarks").get(book.id);
        if (getBook !== null) {
          await this.pouch("bookmarks").remove(getBook);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>
</style>
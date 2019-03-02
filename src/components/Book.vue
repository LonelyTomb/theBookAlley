<template>
  <v-flex md4>
    <v-card color="purple" class="white--text">
      <v-container>
        <v-layout column fluid align-content-center>
          <v-flex>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{book.volumeInfo.title}}</div>
                    <div class="book-author">
                      <p>{{book.volumeInfo.authors.join(",")}}</p>app
                    </div>
                    <div class="book-publisher">
                      <p>{{book.volumeInfo.publisher}}</p>
                    </div>
                  </div>
                </v-card-title>
              </v-flex>

              <v-flex xs5>
                <v-img :src="book.volumeInfo.imageLinks.thumbnail" contain></v-img>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">actions
              <v-spacer></v-spacer>
              <v-icon>save</v-icon>
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
  }
};
</script>

<style scoped>
</style>
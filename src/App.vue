<template>
  <v-app>
    <Header-View></Header-View>
    <v-content>
      <router-view/>
    </v-content>
    <Footer-View></Footer-View>
  </v-app>
</template>

<script>
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
export default {
  name: "App",
  components: {
    "Header-View": Header,
    "Footer-View": Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>

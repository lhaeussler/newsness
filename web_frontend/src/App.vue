<template>
    <div id="app">
      <navbar id="navMenu"></navbar>
        <div id="mainContentChange">
          <register></register>
          <socials id="socials"></socials>
        </div>
      <footerMenu></footerMenu>
    </div>
</template>

<script>
import Socials from  "./components/socials";
import navbar from "./components/navbar";
import Register from "./components/register";
import footerMenu from "./components/footerMenu";

export default {
  name: 'App',
  components: {
    footerMenu,
    Register,
    navbar,
    Socials
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=El+Messiri:wght@600&family=Monofett&display=swap');
#app {
  font-family: 'El Messiri', sans-serif;
  font-size: large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#socials {
  position: absolute;
}
</style>

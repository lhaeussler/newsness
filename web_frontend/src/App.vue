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
#app {
  top: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#socials {
  position: absolute;
}
</style>

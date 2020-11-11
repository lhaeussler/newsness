<template>
    <div id="app">
      <menu></menu>
        <register></register>
        <socials id="socials"></socials>
      <footer></footer>
    </div>
</template>

<script>
import Socials from  "./components/socials";
import Menu from "./components/menu";
import Register from "./components/register";
import Footer from "./components/footerMenu";

export default {
  name: 'App',
  components: {
    Footer,
    Register,
    Menu,
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
  text-align: center;
  color: #2c3e50;
}
#socials {
  position: absolute;
}


</style>

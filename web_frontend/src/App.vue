<template>
  <b-skeleton-wrapper :loading="loading">
    <div id="app">
      <menu></menu>
        <socials id="socials"></socials>
      <footer></footer>
      <router-view></router-view>
      <register></register>
    </div>
  </b-skeleton-wrapper>
</template>

<script>
import Menu from "./components/menu";
import Socials from  "./components/socials";
import Footer from "./components/footer";
import Register from "./components/register";

export default {
  name: 'App',
  components: {
    Menu,
    Socials,
    Footer,
    Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
menu{
  position: sticky;
  top: 0;
}
#socials {
  position: absolute;
}
register{
  position: absolute;
}

</style>

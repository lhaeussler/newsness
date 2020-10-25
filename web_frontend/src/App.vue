<template>
  <b-skeleton-wrapper :loading="loading">
    <div id="app">
      <menu></menu>
        <page></page>
          <socials id="socials"></socials>
      <footer></footer>
      <router-view></router-view>
    </div>
  </b-skeleton-wrapper>
</template>

<script>
import Menu from "./components/menu";
import Socials from  "./components/socials";
import Page from  "./components/page";
import Footer from "./components/footer";

export default {
  name: 'App',
  components: {
    Menu,
    Socials,
    Page,
    Footer
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
#socials {
  position: absolute;
}
</style>

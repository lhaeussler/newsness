<template>
  <div id="footerMain">
    <b-jumbotron header="BootstrapVue" lead="Proudly presented by Wald und Wiesen SQL">
      <p>For more information visit website</p>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style>
#footerMain{
  position: absolute;
  top: 100em;
  width: 100%;
  height: 5em;
  border-bottom: 5px solid rgb(46, 119, 254);
  border-top: 1px solid black;
}
#footerMain b-jumbotron{
  border-radius: 0;
}
</style>

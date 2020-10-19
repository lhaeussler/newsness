<template>
  <div id="menuHeader"> 
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#">
        <img id="logoImage" src="../assets/img/zeitung-clipart.png">
        Newsness
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" id="sideStripe">Artikel</b-nav-item>
          <b-nav-item href="#" id="sideStripe">Top Angebote</b-nav-item>
          <b-nav-item href="#" id="sideStripe">Über uns</b-nav-item>
          <b-nav-item href="#" id="sideStripe" disabled>Forum</b-nav-item>

        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
<!--          <b-nav-form>-->
<!--            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>-->
<!--          </b-nav-form>-->

          <b-nav-item-dropdown text="Language" disabled right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{users}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-breadcrumb :items="items" type="light" id="colorLightBlue"></b-breadcrumb>
  </div>
</template>

<script>
    export default {
        name: "menu",
        data() {
          return {
            users: 'User 2147345',
            items: [
              {
                text: 'Home',
                href: '#'
              },
              {
                text: 'Neuestes',
                href: '#'
              },
            ]
          }
        }, 
      computed:{
        backgroundChange(){
        }
      }  
    }
</script>

<style>
  #menuHeader{
    background-image: url("../assets/img/farm-2852024.jpg"), linear-gradient(230deg, #ffffff, rgb(46, 119, 254) );
    background-attachment: fixed;
    background-blend-mode: luminosity;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw 30vh;
    padding-top: 5vh;
  }
    b-nav-item:hover{
      border-bottom: medium solid white;
    }
  #logoImage{
    height: 3vw;
    border-radius: 80%;
  }

  @media screen and (min-width: 1000px){
    #sideStripe{
      border-left: medium solid white;
    }
    b-nav-form{
      align-items: center;
      -webkit-align-items: center;
    }
  }
  #colorLightBlue{
    background-color: rgb(135, 162, 235);
    border-radius: 0;
  }
</style>

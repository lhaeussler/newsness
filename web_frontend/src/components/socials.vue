<template>
    <div id="socials">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <b-button-group vertical size="lg">
            <b-button variant="danger" class="fa fa-youtube">
                <a>Youtube</a>
            </b-button>
            <b-button variant="primary" class="fa fa-facebook">
                <a>Facebook</a>
            </b-button>
            <b-button variant="info" class="fa fa-twitter">
                <a>Twitter</a>
            </b-button>
            <b-button variant="warning" class="fa fa-instagram">
                <a>Instagram</a>
            </b-button>
         </b-button-group>
    </div>
</template>

<script>
    export default {
        name: "socials"
    }
</script>

<style>
    #socials{
        margin-top: 18em;
        margin-left: -155px;
    }
        #socials a{
            padding: 20%;
        }
            #socials:hover{
                margin-left: -2px;
                transition: all 1s ease-in-out;
            }
    @media screen and (max-width: 1000px){
        #socials{
            display: none;
        }
    }
</style>

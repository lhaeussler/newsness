<template>
  <div id="register">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email" label-align-sm="left">
        <b-form-input id="input-email" v-model="form.email" type="email" required placeholder="max@mustermann.com"></b-form-input>
      </b-form-group>
      <b-form-group label="Vorname" label-align-sm="left">
        <b-form-input id="input-2" v-model="form.vorname" required placeholder="Max"></b-form-input>
      </b-form-group>
      <b-form-group id="input-2" label="Nachname" label-align-sm="left">
        <b-form-input id="input-3" v-model="form.nachname" required placeholder="Mustermann"></b-form-input>
      </b-form-group>
      <label>Birthdate</label>
    <b-input-group class="mb-3">
      <b-form-input id="example-input" label="Birthdate" v-model="value" type="date" autocomplete="off"></b-form-input>
    </b-input-group>
    <b-form-group id="input-2" label="Password" label-align-sm="left">
      <b-form-input id="text-password" aria-describedby="password-help-block" v-model="form.password" required></b-form-input>
      <b-form-text id="password-help-block">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</b-form-text>
    </b-form-group>
    <b-form-group id="input-3" label="Repeat Password" label-align-sm="left">
      <b-form-input id="input-3" v-model="form.passwordRepeat" type="password" required></b-form-input>
    </b-form-group>
      <b-button type="submit" variant="primary" size="lg">Register</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: "register",
    data() {
      return {
        form: {
          email: '',
          vorname: '',
          nachname:'',
          selected: '',
          password: '',
          passwordRepeat: '',
          value:'',
          formatted: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.vorname = ''
        this.form.nachname = ''


        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      }
    }
  }
</script>
<style>
form
{
  border-block: 20px;
  margin: 0%;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
}
#register{
  position: absolute;
  width: 50%;
  left: 6em;
  top: 20em;
  height: 70%;
  padding: 4%;
  -webkit-box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.75);
  box-shadow: 3px 3px 5px 3px rgba(0,0,0,0.75);
  border-bottom: 5px solid rgb(46, 119, 254);
}
@media screen and (max-width: 1000px){
  #register{
    width: 90%;
    left: 1em;
    right: 1em;
    z-index: 1;
  }
}
</style>


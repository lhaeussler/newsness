<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
       
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
          placeholder="emil@example.com"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-vorname" label="Vorname:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.vorname"
          required
          placeholder="Müster"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-Surname" label="Nachname:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.nachname"
          required
          placeholder="Man"
        ></b-form-input>
      </b-form-group>

        <label for="example-input">Choose a date</label>
    <b-input-group class="mb-3">
      <b-form-input
        id="input-4"
        v-model="value"
        type="date"
        autocomplete="off"
      ></b-form-input>
      <b-input-group-append>
        <b-form-datepicker
          v-model="value"
          button-only
          right
          locale="de-DE"
          aria-controls="example-input"
          @context="onContext"
        ></b-form-datepicker>
      </b-input-group-append>
    </b-input-group>
  <b-form-group id="input-vorname" label="password:" label-for="input-2">
        <b-form-input
          id="input-5"
          v-model="password"
          type="password"
          required
          placeholder="password"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-Surname" label="bestätigen :" label-for="input-3">
        <b-form-input
          id="input-6"
          v-model="bestätigenPassword"
          type="password"
          required
          
        ></b-form-input>
      </b-form-group>

     
      <b-button type="submit" variant="primary">Register</b-button>
      
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
          value:'',
          formatted: '',
          password:'',
          bestätigenPassword:''


        
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
</style>


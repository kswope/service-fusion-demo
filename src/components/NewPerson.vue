<template>

<modal>
  <form @submit.prevent="save">
    <fieldset>
      <label for="name">First Name</label>
      <input type="text" name="name" v-model="personData.firstName" autofocus>
      <label for="name">Last Name</label>
      <input type="text" name="name" v-model="personData.lastName">
      <label for="name">Date Of Birth</label>
      <input type="text" name="name" v-model="personData.dob">
      <label for="name">Phone</label>
      <input type="text" name="name" v-model="personData.phone">
      <label for="name">Zip Code</label>
      <input type="text" name="name" v-model="personData.zip">
      <div class="button-row">
        <button type="button" @click.prevent="$emit('close')">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </fieldset>
  </form>
</modal>

</template>

<script>

import Modal from "./Modal.vue"

export default {

  components: { Modal },

  data() {
    return {
      personData: {
        // firstname, lastname, date of birth, phone number and zip-code
        firstName: null,
        lastName: null,
        dob: null,
        phone: null,
        zip: null
      }
    }
  },

  methods: {

    save() {
      this.$store.dispatch( "persons/add", this.personData )
      this.$emit( "close" )
    }

  }

}

</script>

<style scoped>

.button-row {
  margin-top: 2rem;
}

</style>

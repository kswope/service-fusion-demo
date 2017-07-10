<template>

<modal v-if="personData">
  <form @submit.prevent="save">
    <fieldset>
      <label for="name">First Name</label>
      <input type="text" name="name" v-model="personData.firstName">
      <label for="name">Last Name</label>
      <input type="text" name="name" v-model="personData.lastName">
      <label for="name">Date of Birth</label>
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

  props: ["pushId"],

  data() {
    return {
      personData: null
    }
  },

  methods: {

    save() {
      this.$store.dispatch("persons/update", [this.pushId, this.personData] )
      this.$emit( "close" )
    }

  },

  mounted() {
    // get a COPY of person from store and store locally for editing
    let personFromStore = this.$store.getters[ "persons/all" ][ this.pushId ]
    let clean = JSON.parse( JSON.stringify( personFromStore ) )
    this.personData = clean // should make reactive
  }

}

</script>

<style scoped>

.button-row {
  margin-top: 2rem;
}

</style>

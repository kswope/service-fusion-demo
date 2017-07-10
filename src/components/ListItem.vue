<template>

  <li :key="pushId">

    <span class="pointer" @click="() => $emit('onEditRequest', pushId)"> 
      {{ this.person.firstName }} 
      {{ this.person.lastName }} 
      {{ this.person.dob }} 
      {{ this.person.phone }} 
      {{ this.person.zip }} 
    </span>

    <i class="fa fa-trash-o pointer" 
       style="margin-left:1rem" 
       @click="remove(pushId)"></i>

  </li>

</template>

<script>

export default {

  props: [ "person", "pushId" ],

  methods: {

    remove( pushId ) {
      if ( window.confirm( "Delete? Seriously?" ) ) {
        this.$store.dispatch( "persons/remove", pushId )
      }
    }

  }

}

</script>

<style scoped>

li {
  list-style: none;
}

.pointer {
  cursor: pointer  
}

</style>

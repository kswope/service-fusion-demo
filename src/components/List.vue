<template>
  <div>

    <edit-person 
      v-if="editPerson" 
      v-on:close="() => editPerson = null"
      :pushId="editPerson"></edit-person>

    <new-person 
      v-if="newPerson" 
      v-on:close="() => newPerson = null"
      :pushId="editPerson"></new-person>

    <h2 v-if="$store.getters['persons/total']">persons</h2>

    <ul>
      <transition-group name="fade">
        <list-item 
          v-on:onEditRequest="(pushId) => editPerson = pushId "
          v-for="(person, pushId) in $store.getters['persons/all']" 
          :person="person" :pushId="pushId" :key="pushId">
        </list-item>
      </transition-group>
    </ul>

    <button @click="() => newPerson = true">
      <i class="fa fa-lg fa-plus-circle"></i>
      <span>add person</span>
    </button>
    
  </div>
</template>

<script>

import ListItem from "./ListItem.vue"
import EditPerson from "./EditPerson.vue"
import NewPerson from "./NewPerson.vue"

export default {

  components: {
    ListItem,
    EditPerson,
    NewPerson
  },

  data() {
    return {
      editPerson: null,
      newPerson: null
    }
  }

}

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>

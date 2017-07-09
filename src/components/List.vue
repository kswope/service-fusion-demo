<template>
  <div>
    <h1>List</h1>
    <ul>
      <li v-for="(person, key) in $store.getters['persons/all']" :key="key">
        {{ person }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () { return { } },
  mounted() {
  }
}
</script>

<style scoped>
</style>

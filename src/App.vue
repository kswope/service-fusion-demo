<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>

.container {
  width: 70%;
  margin: 0px auto;
  margin-top: 100px;
}

button {
  background-color: grey;
  border-color: grey;
}

</style>

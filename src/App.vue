<template>

<div class="my-container">
  <router-view></router-view>
</div>

</template>

<script>

export default {
  name: 'app'
}

</script>

<style>

.my-container {
  width: 70%;
  margin: 0px auto;
  margin-top: 100px;
}

.button-grey {
  background-color: grey;
  border-color: grey;
}

</style>

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

/* 
WARNING, these styles are being overridden by milligram css BUT only in the
production bundle, not running in the dev server!  What you see is not what you
get!
*/

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

/* global sessionStorage */

<template>
  <div>
    <p>You are now authenticated!</p>
  </div>
</template>

<script>
//import * as AuthService from '../services/AuthService';
export default {
  data () {
    return {
      authenticated : false
    }
  },
  created : function ()  {
      //this.authenticated = AuthService.checkIsAuthenticated()
  }
}
</script>

<style scoped>
  h1 {
    color: #42b983;
  }
</style>
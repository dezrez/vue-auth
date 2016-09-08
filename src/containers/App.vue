<template>
  <div id="app">
    <div v-if="authed">
      <app-header></app-header>
      <router-view class="view" keep-alive transition transition-mode="out-in">
      </router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import * as authService from '../services/authService';
  export default {
  data () {
    return {
      authed : false
    }
  },
  created : function ()  {
      this.authed = authService.checkIsAuthenticated();
  }
}
</script>

<style>
  html {
    height: 100%;
  }
  
  body {
    height: 100%;
  }
</style>
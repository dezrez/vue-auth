<template>
  <div id="app">
    <app-header></app-header>
    <router-view class="view" keep-alive transition transition-mode="out-in">
    </router-view>
    <app-footer></app-footer>
  </div>
</template>

<style>
  html {
    height: 100%;
  }
  
  body {
    height: 100%;
  }
</style>
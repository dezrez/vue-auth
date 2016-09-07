<template lang="jade">
	footer Footer Container
</template>

<script>
	export default {
	  
	  data () {
	    return {
	      
	    }
	  },
	  created : function ()  {
	     
	  }
	}
</script>

<style scoped lang="sass">
   @import "~bourbon/app/assets/stylesheets/bourbon";
   * 
   	color: red;
   	background-color: red;
   	@include background(linear-gradient(red, green) left repeat);
</style>
<template>
	<div>
		<h4 class="title">Example <i class="fa fa-angle-right"></i></h4>		
		<i class="fa fa-circle text-success"></i>
		<dropzone id="mydropzone" url="https://httpbin.org/post" :dropzone-options="options" :use-custom-dropzone-options="true" v-bind:use-font-awesome="true"></dropzone>
	</div>
</template>

<script>
	import Dropzone from 'vue2-dropzone'
export default{
	  components: {
    Dropzone
  },
  data () {
    return {
      options: {
        showRemoveLink: true
      }
    }
  }
}
</script>

<style>
	
</style>

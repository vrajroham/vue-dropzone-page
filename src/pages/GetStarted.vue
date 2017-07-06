<template>
	<div>
		<h4 class="title">Get started with basic example <i class="fa fa-angle-right"></i></h4>
		<div id="rawText">			
			<p style="padding-left:0px;display:none;">https://gist.github.com/vrajroham/98c932303be9deb397075efd4c7b06df</p>
		</div>			 
	</div>
</template>

<script>
	import EmbedJS from 'embed-js'
	export default{
	  mounted () {
	    var x = new EmbedJS({
      input: document.getElementById('rawText')
    })
    x.render()
	  }
	}
</script>

<style>

</style>

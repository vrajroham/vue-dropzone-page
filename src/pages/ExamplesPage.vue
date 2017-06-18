<template>
	<div>		
    <div class="row">
      <h4 class="title">Example <i class="fa fa-angle-right"></i></h4>    
      <dropzone id="mydropzone" url="https://httpbin.org/post" :dropzone-options="options" :use-custom-dropzone-options="true" v-bind:use-font-awesome="true"></dropzone>  
    </div>
    <hr>
    <div class="row">
      <table class="table table-striped table-hover table-bordered table-condensed">
      <thead>
        <tr>
          <th>#</th>
          <th>Event</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>vdropzone-file-added(<code>file</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>2</td>
          <td>vdropzone-files-added(<code>file</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>3</td>
          <td>vdropzone-success(<code>file, response</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>4</td>
          <td>vdropzone-error(<code>file</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>5</td>
          <td>vdropzone-removed-file(<code>file, error, xhr</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>6</td>
          <td>vdropzone-sending(<code>file, xhr, formData</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>7</td>
          <td>vdropzone-success-multiple(<code>files, response</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>8</td>
          <td>vdropzone-sending-multiple(<code>files, xhr, formData</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>9</td>
          <td>vdropzone-queue-complete(<code>file, xhr, formData</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>10</td>
          <td>vdropzone-total-upload-progress(<code>totaluploadprogress, totalBytes, totalBytesSent</code>)</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
        <tr>
          <td>11</td>
          <td>vdropzone-mounted()</td>
          <td><i class="fa fa-circle"></i></td>
        </tr>
      </tbody>
    </table>    
    </div>
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

<style scoped>
	.active{
    color: #78CB5B;
  }
  .inactive{
    color: #000000;
  }
  th{
    text-align: center;
  }
  td:nth-child(1){
    text-align: center;
  }
  td:nth-child(3){
    text-align: center;
  }
  td:nth-child(2){
    padding-left: 40px;
  }
</style>

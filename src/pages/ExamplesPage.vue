<template>
	<div>		
    <div class="row">
      <h4 class="title">Examples <i class="fa fa-angle-right"></i></h4>    
      <dropzone 
        id="mydropzone"
        ref="mydropzone" 
        url="https://httpbin.org/post"
        :dropzone-options="options" 
        :use-custom-dropzone-options="true"
        @vdropzone-file-added="vfileAdded"        
        @vdropzone-success="vsuccess"
        @vdropzone-error="verror"
        @vdropzone-removed-file="vremoved"
        @vdropzone-sending="vsending"
        @vdropzone-success-multiple="vsuccessMuliple"
        @vdropzone-sending-multiple="vsendingMuliple"
        @vdropzone-queue-complete="vqueueComplete"
        @vdropzone-total-upload-progress="vprogress"
        v-bind:use-font-awesome="true"></dropzone>  
    </div>
    <br>
    <button class="btn btn-default btn-mini" @click="removeAll">Remove All Files</button>
    <p class="pull-right" v-if="myProgress !== 0 && myProgress != 100">Total Upload Progress : {{myProgress}} %</p>
    <hr>    
    <div class="row">
      <table class="table table-hover table-bordered table-condensed">
      <thead>
        <tr>
          <th>#</th>
          <th>Event</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{ 'event-active' : fileAdded }">
          <td>1</td>
          <td>vdropzone-file-added(<code>file</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : fileAdded }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : filesAdded }">
          <td>2</td>
          <td>vdropzone-files-added(<code>file</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : filesAdded }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : success }">
          <td>3</td>
          <td>vdropzone-success(<code>file, response</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : success }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : error }">
          <td>4</td>
          <td>vdropzone-error(<code>file</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : error }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : removedFile }">
          <td>5</td>
          <td>vdropzone-removed-file(<code>file, error, xhr</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : removedFile }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : sending }">
          <td>6</td>
          <td>vdropzone-sending(<code>file, xhr, formData</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : sending }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : successMultiple }">
          <td>7</td>
          <td>vdropzone-success-multiple(<code>files, response</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : successMultiple }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : sendingMultiple }">
          <td>8</td>
          <td>vdropzone-sending-multiple(<code>files, xhr, formData</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : sendingMultiple }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : queueComplete }">
          <td>9</td>
          <td>vdropzone-queue-complete(<code>file, xhr, formData</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : queueComplete }"></i></td>
        </tr>
        <tr :class="{ 'event-active' : progress }">
          <td>10</td>
          <td>vdropzone-total-upload-progress(<code>totaluploadprogress, totalBytes, totalBytesSent</code>)</td>
          <td><i class="fa fa-circle" :class="{ 'active' : progress }"></i></td>
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
      },
      fileAdded: false,
      filesAdded: false,
      success: false,
      error: false,
      removedFile: false,
      sending: false,
      successMultiple: false,
      sendingMultiple: false,
      queueComplete: false,
      uploadProgress: false,
      progress: false,
      myProgress: 0
    }
  },
  methods: {
    vfileAdded (file) {
      this.fileAdded = true
      window.toastr.info('', 'Event : vdropzone-file-added')
    },
    vfilesAdded (file) {
      this.filesAdded = true
      window.toastr.info('', 'Event : vdropzone-files-added')
    },
    vsuccess (file, response) {
      this.success = true
      window.toastr.success('', 'Event : vdropzone-success')
    },
    verror (file) {
      this.error = true
      window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    vremoved (file, xhr, error) {
      this.removedFile = true
      window.toastr.warning('', 'Event : vdropzone-removedFile')
    },
    vsending (file, xhr, formData) {
      this.sending = true
      window.toastr.warning('', 'Event : vdropzone-sending')
    },
    vsuccessMuliple (files, response) {
      this.successMultiple = true
      window.toastr.success('', 'Event : vdropzone-success-multiple')
    },
    vsendingMuliple (file, xhr, formData) {
      this.sendingMultiple = true
      window.toastr.warning('', 'Event : vdropzone-sending-multiple')
    },
    vqueueComplete (file, xhr, formData) {
      this.queueComplete = true
      window.toastr.success('', 'Event : vdropzone-queue-complete')
    },
    vprogress (totalProgress, totalBytes, totalBytesSent) {
      this.progress = true
      this.myProgress = Math.floor(totalProgress)
      // window.toastr.success('', 'Event : vdropzone-sending')
    },
    removeAll () {
      this.$refs.mydropzone.removeAllFiles()
    }
  },
  watch: {
    fileAdded () {
      let that = this
      setTimeout(function () {
        that.fileAdded = false
      }, 2000)
    },
    filesAdded () {
      let that = this
      setTimeout(function () {
        that.filesAdded = false
      }, 2000)
    },
    success () {
      let that = this
      setTimeout(function () {
        that.success = false
      }, 2000)
    },
    error () {
      let that = this
      setTimeout(function () {
        that.error = false
      }, 2000)
    },
    removedFile () {
      let that = this
      setTimeout(function () {
        that.removedFile = false
      }, 2000)
    },
    sending () {
      let that = this
      setTimeout(function () {
        that.sending = false
      }, 2000)
    },
    successMultiple () {
      let that = this
      setTimeout(function () {
        that.successMultiple = false
      }, 2000)
    },
    sendingMultiple () {
      let that = this
      setTimeout(function () {
        that.sendingMultiple = false
      }, 2000)
    },
    queueComplete () {
      let that = this
      setTimeout(function () {
        that.queueComplete = false
      }, 2000)
    },
    progress () {
      let that = this
      setTimeout(function () {
        that.progress = false
      }, 2000)
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
  .event-active{
    background-color : lavender;
  }
</style>

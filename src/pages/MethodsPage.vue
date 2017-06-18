<template>
	<div>
		<h4 class="title">Methods <i class="fa fa-angle-right"></i></h4>
		<table class="table table-striped table-condensed table-hover table-bordered">
			<thead>
				<tr>
					<th>#</th>
					<th>Method</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>setOption(<code>optionname, value</code>)</td>
					<td>Sets the value of one of the dropzone options after initialisation. Handy if you need to pass through a token after the component has initialised.</td>
				</tr>
				<tr>
					<td>2</td>
					<td>removeAllFiles()</td>
					<td>Empties the dropzone area.</td>
				</tr>
				<tr>
					<td>3</td>
					<td>processQueue()</td>
					<td>Uploads the files, required if autoProcessQueue is set to false.</td>
				</tr>
				<tr>
					<td>4</td>
					<td>removeFile(<code>file</code>)</td>
					<td>Removes a file from the dropzone area.</td>
				</tr>
				<tr>
					<td>5</td>
					<td>manuallyAddFile(<code>file, fileUrl, callback, crossOrigin</code>)</td>
					<td>Manually adds a file to the dropzone area. See the dropzone docs for more information.</td>
				</tr>
				<tr>
					<td>6</td>
					<td>getAcceptedFiles()</td>
					<td>Returns array of valid/ accepted files.</td>
				</tr>
				<tr>
					<td>7</td>
					<td>getRejectedFiles()</td>
					<td>Returns array of Invalid/ rejected files.</td>
				</tr>
				<tr>
					<td>8</td>
					<td>getUploadingFiles()</td>
					<td>Returns array of uploading files.</td>
				</tr>
				<tr>
					<td>9</td>
					<td>getQueuedFiles()</td>
					<td>Returns array of uploading files.</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{}
</script>

<style>
	tr th {
		color: #0aa;
	}
	tr td {
		color: #808080;
		font-size: 11px;
      	font-weight: 600;
	}
</style>

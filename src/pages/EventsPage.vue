<template>
	<div>
		<h4 class="title">Events <i class="fa fa-angle-right"></i></h4>
		<table class="table table-striped table-hover table-bordered table-condensed">
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
					<td>vdropzone-file-added(<code>file</code>)</td>
					<td>File added to the dropzone.</td>
				</tr>
				<tr>
					<td>2</td>
					<td>vdropzone-files-added(<code>file</code>)</td>
					<td>Files added to the dropzone.</td>
				</tr>
				<tr>
					<td>3</td>
					<td>vdropzone-success(<code>file, response</code>)</td>
					<td>File successfully uploaded.</td>
				</tr>
				<tr>
					<td>4</td>
					<td>vdropzone-error(<code>file</code>)</td>
					<td>File uploaded encountered an error.</td>
				</tr>
				<tr>
					<td>5</td>
					<td>vdropzone-removed-file(<code>file, error, xhr</code>)</td>
					<td>A file was removed from the dropzone.</td>
				</tr>
				<tr>
					<td>6</td>
					<td>vdropzone-sending(<code>file, xhr, formData</code>)</td>
					<td>Modify the request and add addtional parameters to request before sending.</td>
				</tr>
				<tr>
					<td>7</td>
					<td>vdropzone-success-multiple(<code>files, response</code>)</td>
					<td>Fired if the uploadMultiple option is true.</td>
				</tr>
				<tr>
					<td>8</td>
					<td>vdropzone-sending-multiple(<code>files, xhr, formData</code>)</td>
					<td>Fired if the uploadMultiple option is true.</td>
				</tr>
				<tr>
					<td>9</td>
					<td>vdropzone-queue-complete(<code>file, xhr, formData</code>)</td>
					<td>Fired when queue has been completely processed/ uploaded.</td>
				</tr>
				<tr>
					<td>10</td>
					<td>vdropzone-total-upload-progress(<code>totaluploadprogress, totalBytes, totalBytesSent</code>)</td>
					<td>This event can be used to show the overall upload progress of all files. <code>Note : totaluploadprogress (0-100)</code></td>
				</tr>
				<tr>
					<td>11</td>
					<td>vdropzone-mounted()</td>
					<td>Fired when dropzone component is mounted.</td>
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
		font-size: 12px;
      	font-weight: 600;
	}
</style>

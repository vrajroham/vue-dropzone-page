<template>
	<div>
		<h4 class="title">Properties <i class="fa fa-angle-right"></i></h4>
		<table class="table table-striped table-condensed table-hover table-bordered">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Type</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>id</td>
					<td>String</td>
					<td>A string by which to identify the component, can be anything. <code>Required*</code></td>
				</tr>
				<tr>
					<td>2</td>
					<td>url</td>
					<td>String</td>
					<td>Url to post the upload to. <code>Required*</code></td>
				</tr>
				<tr>
					<td>3</td>
					<td>paramName</td>
					<td>String</td>
					<td>The name of the file param that gets transferred. Defaults to file. <code>NOTE:</code> If you have the option uploadMultiple set to true, then Dropzone will append [] to the name.</td>
				</tr>
				<tr>
					<td>4</td>
					<td>clickable</td>
					<td>Boolean</td>
					<td>Whether the dropzone area is clickable, if false then users can only drag items on to the area.</td>
				</tr>
				<tr>
					<td>5</td>
					<td>acceptedFileTypes</td>
					<td>String</td>
					<td>A comma separated string of accepted file types <code>E.g. image/*, application/pdf, .psd</code></td>
				</tr>
				<tr>
					<td>6</td>
					<td>thumbnailHeight</td>
					<td>Number</td>
					<td>The height of thumbnails in pixels.</td>
				</tr>
				<tr>
					<td>7</td>
					<td>thumbnailWidth</td>
					<td>Number</td>
					<td>The width of thumbnails in pixels.</td>
				</tr>
				<tr>
					<td>8</td>
					<td>showRemoveLink</td>
					<td>Boolean</td>
					<td>Whether the Remove link is shown on items.</td>
				</tr>
				<tr>
					<td>9</td>
					<td>maxFileSizeInMB</td>
					<td>Number</td>
					<td>The maximum file size for a single upload in MB.</td>
				</tr>
				<tr>
					<td>10</td>
					<td>maxNumberOfFiles</td>
					<td>Number</td>
					<td>The maximum number of files to allow the user to upload.</td>
				</tr>
				<tr>
					<td>11</td>
					<td>autoProcessQueue</td>
					<td>Boolean</td>
					<td>Whether the files are automatically uploaded or not.</td>
				</tr>
				<tr>
					<td>12</td>
					<td>useFontAwesome</td>
					<td>Boolean</td>
					<td>Whether to use Font Awesome instead of Material Icon.</td>
				</tr>
				<tr>
					<td>13</td>
					<td>headers</td>
					<td>Object</td>
					<td>If you want to add additional headers.</td>
				</tr>
				<tr>
					<td>14</td>
					<td>language</td>
					<td>Object</td>
					<td>Use dropzone's dict properties to change texts.</td>
				</tr>
				<tr>
					<td>15</td>
					<td>useCustomDropzoneOptions</td>
					<td>Boolean</td>
					<td>If you want to define your own dropzone config set this to true and define a dropzoneOptions.</td>
				</tr>
				<tr>
					<td>16</td>
					<td>dropzoneOptions</td>
					<td>Object</td>
					<td>A custom set of rules to define your dropzone object, use anything available in the dropzone config.</td>
				</tr>
				<tr>
					<td>17</td>
					<td>resizeWidth</td>
					<td>Number</td>
					<td>If set, images will be resized to these dimensions before being uploaded. If only one, resizeWidth or resizeHeight is provided, the original aspect ratio of the file will be preserved. <code>Default : null</code></td>
				</tr>
				<tr>
					<td>18</td>
					<td>resizeHeight</td>
					<td>Number</td>
					<td>Height of image to be resized. <code>Default : null</code></td>
				</tr>
				<tr>
					<td>19</td>
					<td>resizeMimeType</td>
					<td>String</td>
					<td>The mime type of the resized image (before it gets uploaded to the server). If null the original mime type will be used. To force jpeg, for example, use image/jpeg. <code>Default : null</code></td>
				</tr>
				<tr>
					<td>20</td>
					<td>resizeQuality</td>
					<td>Number</td>
					<td>The quality of the resized images. <code>Default : null</code></td>
				</tr>
				<tr>
					<td>21</td>
					<td>resizeMethod</td>
					<td>String</td>
					<td>How the images should be scaled down in case both, resizeWidth and resizeHeight are provided. Can be either contain or crop. <code>Default : 'contain'</code></td>
				</tr>
				<tr>
					<td>22</td>
					<td>preview-template</td>
					<td>Function</td>
					<td>A custom preview template which will be passed as function.</td>
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
		text-transform: uppercase;
	}
	tr td {
		color: #808080;
		font-size: 12px;
      	font-weight: 600;
	}
</style>

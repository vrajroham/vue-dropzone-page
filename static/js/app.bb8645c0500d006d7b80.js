webpackJsonp([0],[,,,,function(e,t,s){"use strict";var o=s(2),r=s(40),n=s(29),a=s.n(n),i=s(28),v=s.n(i),d=s(31),l=s.n(d),_=s(26),c=s.n(_),u=s(27),p=s.n(u),f=s(30),h=s.n(f);o.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"home",component:a.a},{path:"/get-started",name:"get-started",component:v.a},{path:"/props",name:"props",component:l.a},{path:"/events",name:"events",component:c.a},{path:"/examples",name:"examples",component:p.a},{path:"/methods",name:"methods",component:h.a}]})},,function(e,t,s){s(21);var o=s(0)(s(8),s(37),null,null);e.exports=o.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),r=s(6),n=s.n(r),a=s(4);window.$=window.jQuery=s(1),o.a.config.productionTip=!1,window.toastr=s(5),window.toastr.options.showMethod="slideDown",window.toastr.options.hideMethod="slideUp",window.toastr.options.positionClass="toast-bottom-left",window.toastr.options.closeMethod="slideUp",window.toastr.options.progressBar=!0,window.toastr.options.timeOut=15e3,window.toastr.options.extendedTimeOut=15e3,new o.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(25),r=s.n(o);t.default={components:{HeaderBar:r.a},name:"app"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(42),r=s.n(o);t.default={components:{Dropzone:r.a},data:function(){return{options:{showRemoveLink:!0},fileAdded:!1,filesAdded:!1,success:!1,error:!1,removedFile:!1,sending:!1,successMultiple:!1,sendingMultiple:!1,queueComplete:!1,uploadProgress:!1,progress:!1,myProgress:0}},methods:{vfileAdded:function(e){this.fileAdded=!0,window.toastr.info("","Event : vdropzone-file-added")},vfilesAdded:function(e){this.filesAdded=!0,window.toastr.info("","Event : vdropzone-files-added")},vsuccess:function(e,t){this.success=!0,window.toastr.success("","Event : vdropzone-success")},verror:function(e){this.error=!0,window.toastr.error(e.upload.filename,"Event : vdropzone-error - "+e.status)},vremoved:function(e,t,s){this.removedFile=!0,window.toastr.warning("","Event : vdropzone-removedFile")},vsending:function(e,t,s){this.sending=!0,window.toastr.warning("","Event : vdropzone-sending")},vsuccessMuliple:function(e,t){this.successMultiple=!0,window.toastr.success("","Event : vdropzone-success-multiple")},vsendingMuliple:function(e,t,s){this.sendingMultiple=!0,window.toastr.warning("","Event : vdropzone-sending-multiple")},vqueueComplete:function(e,t,s){this.queueComplete=!0,window.toastr.success("","Event : vdropzone-queue-complete")},vprogress:function(e,t,s){this.progress=!0,this.myProgress=Math.floor(e)}},watch:{fileAdded:function(){var e=this;setTimeout(function(){e.fileAdded=!1},2e3)},filesAdded:function(){var e=this;setTimeout(function(){e.filesAdded=!1},2e3)},success:function(){var e=this;setTimeout(function(){e.success=!1},2e3)},error:function(){var e=this;setTimeout(function(){e.error=!1},2e3)},removedFile:function(){var e=this;setTimeout(function(){e.removedFile=!1},2e3)},sending:function(){var e=this;setTimeout(function(){e.sending=!1},2e3)},successMultiple:function(){var e=this;setTimeout(function(){e.successMultiple=!1},2e3)},sendingMultiple:function(){var e=this;setTimeout(function(){e.sendingMultiple=!1},2e3)},queueComplete:function(){var e=this;setTimeout(function(){e.queueComplete=!1},2e3)},progress:function(){var e=this;setTimeout(function(){e.progress=!1},2e3)}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(16),r=s.n(o);t.default={mounted:function(){new r.a({input:document.getElementById("rawText")}).render()}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,s){e.exports=s.p+"static/img/vue-drp1.93d2bf4.png"},function(e,t,s){var o=s(0)(s(9),s(36),null,null);e.exports=o.exports},function(e,t,s){s(18);var o=s(0)(s(10),s(33),null,null);e.exports=o.exports},function(e,t,s){s(23);var o=s(0)(s(11),s(39),"data-v-f90dfe5e",null);e.exports=o.exports},function(e,t,s){s(17);var o=s(0)(s(12),s(32),null,null);e.exports=o.exports},function(e,t,s){s(19);var o=s(0)(s(13),s(34),null,null);e.exports=o.exports},function(e,t,s){s(22);var o=s(0)(s(14),s(38),null,null);e.exports=o.exports},function(e,t,s){s(20);var o=s(0)(s(15),s(35),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"title"},[e._v("Get started with basic example "),s("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),s("div",{attrs:{id:"rawText"}},[s("p",{staticStyle:{"padding-left":"0px",display:"none"}},[e._v("https://gist.github.com/vrajroham/98c932303be9deb397075efd4c7b06df")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"title"},[e._v("Events "),s("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),s("table",{staticClass:"table table-striped table-hover table-bordered table-condensed"},[s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1")]),e._v(" "),s("td",[e._v("vdropzone-file-added("),s("code",[e._v("file")]),e._v(")")]),e._v(" "),s("td",[e._v("File added to the dropzone.")])]),e._v(" "),s("tr",[s("td",[e._v("2")]),e._v(" "),s("td",[e._v("vdropzone-files-added("),s("code",[e._v("file")]),e._v(")")]),e._v(" "),s("td",[e._v("Files added to the dropzone.")])]),e._v(" "),s("tr",[s("td",[e._v("3")]),e._v(" "),s("td",[e._v("vdropzone-success("),s("code",[e._v("file, response")]),e._v(")")]),e._v(" "),s("td",[e._v("File successfully uploaded.")])]),e._v(" "),s("tr",[s("td",[e._v("4")]),e._v(" "),s("td",[e._v("vdropzone-error("),s("code",[e._v("file")]),e._v(")")]),e._v(" "),s("td",[e._v("File uploaded encountered an error.")])]),e._v(" "),s("tr",[s("td",[e._v("5")]),e._v(" "),s("td",[e._v("vdropzone-removed-file("),s("code",[e._v("file, error, xhr")]),e._v(")")]),e._v(" "),s("td",[e._v("A file was removed from the dropzone.")])]),e._v(" "),s("tr",[s("td",[e._v("6")]),e._v(" "),s("td",[e._v("vdropzone-sending("),s("code",[e._v("file, xhr, formData")]),e._v(")")]),e._v(" "),s("td",[e._v("Modify the request and add addtional parameters to request before sending.")])]),e._v(" "),s("tr",[s("td",[e._v("7")]),e._v(" "),s("td",[e._v("vdropzone-success-multiple("),s("code",[e._v("files, response")]),e._v(")")]),e._v(" "),s("td",[e._v("Fired if the uploadMultiple option is true.")])]),e._v(" "),s("tr",[s("td",[e._v("8")]),e._v(" "),s("td",[e._v("vdropzone-sending-multiple("),s("code",[e._v("files, xhr, formData")]),e._v(")")]),e._v(" "),s("td",[e._v("Fired if the uploadMultiple option is true.")])]),e._v(" "),s("tr",[s("td",[e._v("9")]),e._v(" "),s("td",[e._v("vdropzone-queue-complete("),s("code",[e._v("file, xhr, formData")]),e._v(")")]),e._v(" "),s("td",[e._v("Fired when queue has been completely processed/ uploaded.")])]),e._v(" "),s("tr",[s("td",[e._v("10")]),e._v(" "),s("td",[e._v("vdropzone-total-upload-progress("),s("code",[e._v("totaluploadprogress, totalBytes, totalBytesSent")]),e._v(")")]),e._v(" "),s("td",[e._v("This event can be used to show the overall upload progress of all files. "),s("code",[e._v("Note : totaluploadprogress (0-100)")])])]),e._v(" "),s("tr",[s("td",[e._v("11")]),e._v(" "),s("td",[e._v("vdropzone-mounted()")]),e._v(" "),s("td",[e._v("Fired when dropzone component is mounted.")])])])])])}]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{staticClass:"img img-responsive logo",attrs:{src:s(24),width:"50%"}}),e._v(" "),o("hr"),e._v(" "),o("p",[o("strong",[e._v("vue2-dropzone")]),e._v(" is a lightweight plugin for developers to upload and resize images/files. Component has define different type events for developers and they can control the file flow and do more things they want. ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"title"},[e._v("Properties "),s("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),s("table",{staticClass:"table table-striped table-condensed table-hover table-bordered"},[s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1")]),e._v(" "),s("td",[e._v("id")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("A string by which to identify the component, can be anything. "),s("code",[e._v("Required*")])])]),e._v(" "),s("tr",[s("td",[e._v("2")]),e._v(" "),s("td",[e._v("url")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("Url to post the upload to. "),s("code",[e._v("Required*")])])]),e._v(" "),s("tr",[s("td",[e._v("3")]),e._v(" "),s("td",[e._v("paramName")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("The name of the file param that gets transferred. Defaults to file. "),s("code",[e._v("NOTE:")]),e._v(" If you have the option uploadMultiple set to true, then Dropzone will append [] to the name.")])]),e._v(" "),s("tr",[s("td",[e._v("4")]),e._v(" "),s("td",[e._v("clickable")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("Whether the dropzone area is clickable, if false then users can only drag items on to the area.")])]),e._v(" "),s("tr",[s("td",[e._v("5")]),e._v(" "),s("td",[e._v("acceptedFileTypes")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("A comma separated string of accepted file types "),s("code",[e._v("E.g. image/*, application/pdf, .psd")])])]),e._v(" "),s("tr",[s("td",[e._v("6")]),e._v(" "),s("td",[e._v("thumbnailHeight")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The height of thumbnails in pixels.")])]),e._v(" "),s("tr",[s("td",[e._v("7")]),e._v(" "),s("td",[e._v("thumbnailWidth")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The width of thumbnails in pixels.")])]),e._v(" "),s("tr",[s("td",[e._v("8")]),e._v(" "),s("td",[e._v("showRemoveLink")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("Whether the Remove link is shown on items.")])]),e._v(" "),s("tr",[s("td",[e._v("9")]),e._v(" "),s("td",[e._v("maxFileSizeInMB")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The maximum file size for a single upload in MB.")])]),e._v(" "),s("tr",[s("td",[e._v("10")]),e._v(" "),s("td",[e._v("maxNumberOfFiles")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The maximum number of files to allow the user to upload.")])]),e._v(" "),s("tr",[s("td",[e._v("11")]),e._v(" "),s("td",[e._v("autoProcessQueue")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("Whether the files are automatically uploaded or not.")])]),e._v(" "),s("tr",[s("td",[e._v("12")]),e._v(" "),s("td",[e._v("useFontAwesome")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("Whether to use Font Awesome instead of Material Icon.")])]),e._v(" "),s("tr",[s("td",[e._v("13")]),e._v(" "),s("td",[e._v("headers")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("If you want to add additional headers.")])]),e._v(" "),s("tr",[s("td",[e._v("14")]),e._v(" "),s("td",[e._v("language")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("Use dropzone's dict properties to change texts.")])]),e._v(" "),s("tr",[s("td",[e._v("15")]),e._v(" "),s("td",[e._v("useCustomDropzoneOptions")]),e._v(" "),s("td",[e._v("Boolean")]),e._v(" "),s("td",[e._v("If you want to define your own dropzone config set this to true and define a dropzoneOptions.")])]),e._v(" "),s("tr",[s("td",[e._v("16")]),e._v(" "),s("td",[e._v("dropzoneOptions")]),e._v(" "),s("td",[e._v("Object")]),e._v(" "),s("td",[e._v("A custom set of rules to define your dropzone object, use anything available in the dropzone config.")])]),e._v(" "),s("tr",[s("td",[e._v("17")]),e._v(" "),s("td",[e._v("resizeWidth")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("If set, images will be resized to these dimensions before being uploaded. If only one, resizeWidth or resizeHeight is provided, the original aspect ratio of the file will be preserved. "),s("code",[e._v("Default : null")])])]),e._v(" "),s("tr",[s("td",[e._v("18")]),e._v(" "),s("td",[e._v("resizeHeight")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("Height of image to be resized. "),s("code",[e._v("Default : null")])])]),e._v(" "),s("tr",[s("td",[e._v("19")]),e._v(" "),s("td",[e._v("resizeMimeType")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("The mime type of the resized image (before it gets uploaded to the server). If null the original mime type will be used. To force jpeg, for example, use image/jpeg. "),s("code",[e._v("Default : null")])])]),e._v(" "),s("tr",[s("td",[e._v("20")]),e._v(" "),s("td",[e._v("resizeQuality")]),e._v(" "),s("td",[e._v("Number")]),e._v(" "),s("td",[e._v("The quality of the resized images. "),s("code",[e._v("Default : null")])])]),e._v(" "),s("tr",[s("td",[e._v("21")]),e._v(" "),s("td",[e._v("resizeMethod")]),e._v(" "),s("td",[e._v("String")]),e._v(" "),s("td",[e._v("How the images should be scaled down in case both, resizeWidth and resizeHeight are provided. Can be either contain or crop. "),s("code",[e._v("Default : 'contain'")])])]),e._v(" "),s("tr",[s("td",[e._v("22")]),e._v(" "),s("td",[e._v("preview-template")]),e._v(" "),s("td",[e._v("Function")]),e._v(" "),s("td",[e._v("A custom preview template which will be passed as function.")])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-default navbar-static-top"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-header"},[s("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#app-navbar-collapse"}},[s("span",{staticClass:"sr-only"},[e._v("Toggle Navigation")]),e._v(" "),s("span",{staticClass:"icon-bar"}),e._v(" "),s("span",{staticClass:"icon-bar"}),e._v(" "),s("span",{staticClass:"icon-bar"})]),e._v(" "),s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("\n                      VUE-2 DROPZONE\n                  ")])]),e._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"app-navbar-collapse"}},[s("ul",{staticClass:"nav navbar-nav"},[e._v("\n                       \n                  ")]),e._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("a",{attrs:{href:"https://github.com/vrajroham",target:"_blank"}},[s("i",{staticClass:"fa fa-github fa-2x"})])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app"},[s("div",{staticClass:"header"},[s("header-bar")],1),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("ul",{staticClass:"list-group"},[s("router-link",{staticClass:"list-group-item",attrs:{to:"/"}},[s("i",{staticClass:"fa fa-home"}),e._v(" Home")]),e._v(" "),s("router-link",{staticClass:"list-group-item",attrs:{to:"/get-started"}},[s("i",{staticClass:"fa fa-star"}),e._v(" Get Started ")]),e._v(" "),s("router-link",{staticClass:"list-group-item",attrs:{to:"/props"}},[s("i",{staticClass:"fa fa-envelope"}),e._v(" Props ")]),e._v(" "),s("router-link",{staticClass:"list-group-item",attrs:{to:"/methods"}},[s("i",{staticClass:"fa fa-flask"}),e._v(" Methods ")]),e._v(" "),s("router-link",{staticClass:"list-group-item",attrs:{to:"/events"}},[s("i",{staticClass:"fa fa-bullhorn"}),e._v(" Events ")]),e._v(" "),s("router-link",{staticClass:"list-group-item",attrs:{to:"/examples"}},[s("i",{staticClass:"fa fa-clone"}),e._v(" Examples ")])],1),e._v(" "),s("hr"),e._v(" "),s("a",{attrs:{href:"https://github.com/vrajroham"}},[e._v("Documented by vrajroham")])]),e._v(" "),s("div",{staticClass:"col-md-9"},[s("router-view")],1)])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"title"},[e._v("Methods "),s("i",{staticClass:"fa fa-angle-right"})]),e._v(" "),s("table",{staticClass:"table table-striped table-condensed table-hover table-bordered"},[s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v("Method")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1")]),e._v(" "),s("td",[e._v("setOption("),s("code",[e._v("optionname, value")]),e._v(")")]),e._v(" "),s("td",[e._v("Sets the value of one of the dropzone options after initialisation. Handy if you need to pass through a token after the component has initialised.")])]),e._v(" "),s("tr",[s("td",[e._v("2")]),e._v(" "),s("td",[e._v("removeAllFiles()")]),e._v(" "),s("td",[e._v("Empties the dropzone area.")])]),e._v(" "),s("tr",[s("td",[e._v("3")]),e._v(" "),s("td",[e._v("processQueue()")]),e._v(" "),s("td",[e._v("Uploads the files, required if autoProcessQueue is set to false.")])]),e._v(" "),s("tr",[s("td",[e._v("4")]),e._v(" "),s("td",[e._v("removeFile("),s("code",[e._v("file")]),e._v(")")]),e._v(" "),s("td",[e._v("Removes a file from the dropzone area.")])]),e._v(" "),s("tr",[s("td",[e._v("5")]),e._v(" "),s("td",[e._v("manuallyAddFile("),s("code",[e._v("file, fileUrl, callback, crossOrigin")]),e._v(")")]),e._v(" "),s("td",[e._v("Manually adds a file to the dropzone area. See the dropzone docs for more information.")])]),e._v(" "),s("tr",[s("td",[e._v("6")]),e._v(" "),s("td",[e._v("getAcceptedFiles()")]),e._v(" "),s("td",[e._v("Returns array of valid/ accepted files.")])]),e._v(" "),s("tr",[s("td",[e._v("7")]),e._v(" "),s("td",[e._v("getRejectedFiles()")]),e._v(" "),s("td",[e._v("Returns array of Invalid/ rejected files.")])]),e._v(" "),s("tr",[s("td",[e._v("8")]),e._v(" "),s("td",[e._v("getUploadingFiles()")]),e._v(" "),s("td",[e._v("Returns array of uploading files.")])]),e._v(" "),s("tr",[s("td",[e._v("9")]),e._v(" "),s("td",[e._v("getQueuedFiles()")]),e._v(" "),s("td",[e._v("Returns array of uploading files.")])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"row"},[e._m(0),e._v(" "),s("dropzone",{attrs:{id:"mydropzone",url:"https://httpbin.org/post","dropzone-options":e.options,"use-custom-dropzone-options":!0,"use-font-awesome":!0},on:{"vdropzone-file-added":e.vfileAdded,"vdropzone-success":e.vsuccess,"vdropzone-error":e.verror,"vdropzone-removed-file":e.vremoved,"vdropzone-sending":e.vsending,"vdropzone-success-multiple":e.vsuccessMuliple,"vdropzone-sending-multiple":e.vsendingMuliple,"vdropzone-queue-complete":e.vqueueComplete,"vdropzone-total-upload-progress":e.vprogress}})],1),e._v(" "),0!==e.myProgress&&100!=e.myProgress?s("p",{staticClass:"pull-right"},[e._v("Total Upload Progress : "+e._s(e.myProgress)+" %")]):e._e(),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("table",{staticClass:"table table-hover table-bordered table-condensed"},[e._m(1),e._v(" "),s("tbody",[s("tr",{class:{"event-active":e.fileAdded}},[s("td",[e._v("1")]),e._v(" "),e._m(2),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.fileAdded}})])]),e._v(" "),s("tr",{class:{"event-active":e.filesAdded}},[s("td",[e._v("2")]),e._v(" "),e._m(3),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.filesAdded}})])]),e._v(" "),s("tr",{class:{"event-active":e.success}},[s("td",[e._v("3")]),e._v(" "),e._m(4),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.success}})])]),e._v(" "),s("tr",{class:{"event-active":e.error}},[s("td",[e._v("4")]),e._v(" "),e._m(5),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.error}})])]),e._v(" "),s("tr",{class:{"event-active":e.removedFile}},[s("td",[e._v("5")]),e._v(" "),e._m(6),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.removedFile}})])]),e._v(" "),s("tr",{class:{"event-active":e.sending}},[s("td",[e._v("6")]),e._v(" "),e._m(7),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.sending}})])]),e._v(" "),s("tr",{class:{"event-active":e.successMultiple}},[s("td",[e._v("7")]),e._v(" "),e._m(8),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.successMultiple}})])]),e._v(" "),s("tr",{class:{"event-active":e.sendingMultiple}},[s("td",[e._v("8")]),e._v(" "),e._m(9),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.sendingMultiple}})])]),e._v(" "),s("tr",{class:{"event-active":e.queueComplete}},[s("td",[e._v("9")]),e._v(" "),e._m(10),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.queueComplete}})])]),e._v(" "),s("tr",{class:{"event-active":e.progress}},[s("td",[e._v("10")]),e._v(" "),e._m(11),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle",class:{active:e.progress}})])]),e._v(" "),e._m(12)])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h4",{staticClass:"title"},[e._v("Example "),s("i",{staticClass:"fa fa-angle-right"})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v("Event")]),e._v(" "),s("th",[e._v("Status")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-file-added("),s("code",[e._v("file")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-files-added("),s("code",[e._v("file")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-success("),s("code",[e._v("file, response")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-error("),s("code",[e._v("file")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-removed-file("),s("code",[e._v("file, error, xhr")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-sending("),s("code",[e._v("file, xhr, formData")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-success-multiple("),s("code",[e._v("files, response")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-sending-multiple("),s("code",[e._v("files, xhr, formData")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-queue-complete("),s("code",[e._v("file, xhr, formData")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[e._v("vdropzone-total-upload-progress("),s("code",[e._v("totaluploadprogress, totalBytes, totalBytesSent")]),e._v(")")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v("11")]),e._v(" "),s("td",[e._v("vdropzone-mounted()")]),e._v(" "),s("td",[s("i",{staticClass:"fa fa-circle"})])])}]}}],[7]);
//# sourceMappingURL=app.bb8645c0500d006d7b80.js.map
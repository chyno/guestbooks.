(window.webpackJsonp=window.webpackJsonp||[]).push([["ddd3"],{"9Jkg":function(t,e,r){t.exports=r("oh+g")},KU97:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guestbook",function(){var t=r("PsOc");return{page:t.default||t}}])},LpSC:function(t,e,r){r("bZMm"),t.exports=self.fetch.bind(self)},PsOc:function(t,e,r){"use strict";r.r(e);var n=r("ln6h"),o=r.n(n),i=r("O40h"),s=r("0iUn"),a=r("sLSF"),u=r("MI3g"),f=r("a7VT"),l=r("Tit0"),h=r("YFqc"),c=r.n(h),p=r("q1tI"),d=r.n(p),y=(r("LpSC"),function(t){function e(t){return Object(s.default)(this,e),Object(u.default)(this,Object(f.default)(e).call(this,t))}return Object(l.default)(e,t),Object(a.default)(e,[{key:"render",value:function(){var t=this.props.data.map(function(t){return d.a.createElement("tr",null,d.a.createElement("td",null,t.name),d.a.createElement("td",null,t.message))});return d.a.createElement("div",null,d.a.createElement("table",null,d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",{style:{height:"50px"}},"Name"),d.a.createElement("th",{style:{height:"50px"}},"Message"))),d.a.createElement("tbody",null,t)),d.a.createElement(c.a,{href:"http://localhost:3000/"},d.a.createElement("a",null,"Back TO Main")))}}],[{key:"getInitialProps",value:function(){var t=Object(i.default)(o.a.mark(function t(e){var r,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.req,t.next=3,fetch("http://localhost:3000/api/guestbooks");case 3:return r=t.sent,t.next=6,r.json();case 6:return n=t.sent,t.abrupt("return",{data:n});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}]),e}(d.a.Component));e.default=y},YFqc:function(t,e,r){t.exports=r("cTJO")},bZMm:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",function(){return f}),r.d(e,"Request",function(){return b}),r.d(e,"Response",function(){return v}),r.d(e,"DOMException",function(){return E}),r.d(e,"fetch",function(){return _});var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(n.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(t){return t&&o.indexOf(Object.prototype.toString.call(t))>-1};function s(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function a(t){return"string"!=typeof t&&(t=String(t)),t}function u(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=h(e);return e.readAsArrayBuffer(t),r}function p(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=p(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||i(t))?this._bodyArrayBuffer=p(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t,e,r,n=l(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=h(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=s(t),e=a(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},f.prototype.delete=function(t){delete this.map[s(t)]},f.prototype.get=function(t){return t=s(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(s(t))},f.prototype.set=function(t,e){this.map[s(t)]=a(e)},f.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},f.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),u(t)},f.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),u(t)},f.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),u(t)},n.iterable&&(f.prototype[Symbol.iterator]=f.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(t,e){var r,n,o=(e=e||{}).body;if(t instanceof b){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),y.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},d.call(b.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];v.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})};var E=self.DOMException;try{new E}catch(g){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function _(t,e){return new Promise(function(r,o){var i=new b(t,e);if(i.signal&&i.signal.aborted)return o(new E("Aborted","AbortError"));var s=new XMLHttpRequest;function a(){s.abort()}s.onload=function(){var t,e,n={status:s.status,statusText:s.statusText,headers:(t=s.getAllResponseHeaders()||"",e=new f,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new v(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.onabort=function(){o(new E("Aborted","AbortError"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n.blob&&(s.responseType="blob"),i.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),i.signal&&(i.signal.addEventListener("abort",a),s.onreadystatechange=function(){4===s.readyState&&i.signal.removeEventListener("abort",a)}),s.send(void 0===i._bodyInit?null:i._bodyInit)})}_.polyfill=!0,self.fetch||(self.fetch=_,self.Headers=f,self.Request=b,self.Response=v)},cTJO:function(t,e,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),i=n(r("/HRN")),s=n(r("WaGi")),a=n(r("ZDA2")),u=n(r("/+P4")),f=n(r("N9n2")),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e},h=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=r("CxY0"),p=l(r("q1tI")),d=(h(r("17x9")),l(r("nOHt"))),y=r("Bu4q");function b(t){return t&&"object"==typeof t?y.formatWithValidation(t):t}var m=function(t){function e(){var t,r,n,o,s;return(0,i.default)(this,e),(t=(0,a.default)(this,(0,u.default)(e).apply(this,arguments))).formatUrls=(r=function(t,e){return{href:b(t),as:b(e)}},n=null,o=null,s=null,function(t,e){if(t===n&&e===o)return s;var i=r(t,e);return n=t,o=e,s=i,i}),t.linkClicked=function(e){var r=e.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),s=i.href,a=i.as;if(function(t){var e=c.parse(t,!1,!0),r=c.parse(y.getLocationOrigin(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}(s)){var u=window.location.pathname;s=c.resolve(u,s),a=a?c.resolve(u,a):s,e.preventDefault();var f=t.props.scroll;null==f&&(f=a.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](s,a,{shallow:t.props.shallow}).then(function(t){t&&f&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){t.props.onError&&t.props.onError(e)})}}},t}return(0,f.default)(e,t),(0,s.default)(e,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,o.default)(this.props.href)!==(0,o.default)(t.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(t,e);d.default.prefetch(r)}}},{key:"render",value:function(){var t=this,e=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={onClick:function(e){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||n),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=d.Router._rewriteUrlForNextExport(s.href)),p.default.cloneElement(i,s)}}]),e}(p.Component);e.default=m},"oh+g":function(t,e,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}}},[["KU97","5d41","9da1"]]]);
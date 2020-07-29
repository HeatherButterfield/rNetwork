new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
    'india-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/IndiaFooter.vue'),
  },
  data: () => ({
    data: data,
  }),
  methods: {
    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
  },
  mounted() {
    function initFreshChat() {
            window.fcWidget.init({
                token: "7574f5e8-6f06-43aa-a1d1-14ebbd766ffa",
                host: "https://wchat.freshchat.com"
            });
        }
        function initialize(i, t) {
            var e; i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e.async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload = initFreshChat, i.head.appendChild(e))
        }
        function initiateCall() {
            initialize(document, "freshchat-js-sdk")
        } window.addEventListener ? window.addEventListener("load", initiateCall, !1) : window.attachEvent("load", initiateCall, !1
        );
        window.fwSettings = {
              'widget_id': 47000003544
          };
          !function () {
              if ("function" != typeof window.FreshworksWidget) {
                  var n = function () { n.q.push(arguments) };
                  n.q = [], window.FreshworksWidget = n
              }

          }()

  var FwBootstrap=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://widget.freshworks.com/widgetBase/",i(i.s=0)}([function(e,t,i){e.exports=i(2)},function(e,t){e.exports="https://widget.freshworks.com/widgetBase/static/media/frame.d7ae132c.css"},function(e,t,i){"use strict";i.r(t);var n=["FrustrationTracking","Predictive"],o={boot:"queueComplete",open:"openWidget",close:"closeWidget",destroy:"destroyWidget",identify:"identifyFormFields",prefill:"prefillFormFields",clear:"clearFormFields",hide:"hideWidget",hideLauncher:"hideLauncher",showLauncher:"showLauncher",show:"showWidget",setLabels:"setLabels",updateSettings:"updateSettings",updatePreviewSettings:"updatePreviewSettings",reloadComponents:"reloadComponents",authenticate:"authenticate",authenticateCallback:"authenticateCallback",logout:"logout",hideFormFields:"hideFormFields",disable:null,disableFormFields:"disableFormFields",hideChoices:"hideChoices"},s={id:1,product_id:1,account_id:1,name:"Help widget",settings:{message:"",button_text:"Help",contact_form:{form_type:2,form_title:"",form_button_text:"Send",form_submit_message:"Thank you for your feedback.",attach_file:!0,screenshot:!0,captcha:!1},appearance:{position:1,offset_from_right:30,offset_from_left:30,offset_from_bottom:30,theme_color:"#2392ec",button_color:"#16193e"},components:{contact_form:!0,solution_articles:!0},predictive_support:{welcome_message:"",message:"We noticed youâ€™re stuck. Tell us what you were trying to accomplish, and our support team will reach out to you as soon as possible.",success_message:"Thanks. We'll be in touch!",domain_list:["freshpo.com"]},hide_launcher_bydefault:!0},active:!0,updated_at:"2018-10-01T14:16:05+05:30",account_url:"https://localhost.freshdesk-dev.com",languages:{primary:"en",supported:["ca","cs","da","de","es-LA","es","et","fi","fr","hu","id","it","ja-JP","ko","nb-NO","nl","pl","pt-BR","pt-PT","ru-RU","sv-SE","sk","sl","tr","vi","zh-CN","uk","th","ro","zh-TW","lv-LV","bs","bg","hr","el","ms","lt","sr"]}};function r(){return window.fwSettings&&window.fwSettings.preview}function a(e,t){return e.indexOf(t)>=0}var c={init:function(){var e=window.fwSettings.widget_id;if(e)if(this.origin=window.location.origin,r()){var t=s;t.id=e,this.initWidget(t)}else{var i="".concat("https://widget.freshworks.com","/widgets/").concat(e,".json?randomId=").concat(Math.random());this.fetchSettings(i,this.initWidget.bind(this))}},fetchSettings:function(e,t){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&200===i.status&&t(function(e){try{return JSON.parse(e)}catch(t){return e}}(i.response))},i.open("get",e),i.responseType="json",i.send()},showWidget:function(e){var t=!1,i=e.meta,n=e.settings,o=e.components;return(o||n.components)&&["contact_form","solution_articles","frustration_tracking","predictive_support"].forEach(function(e){var s=i&&i.data_version&&o?o[e]&&o[e].enabled:n.components[e];t=t||Boolean(s)}),t},initWidget:function(e){var t;null!=(t=e)&&0!==Object.keys(t).length&&e&&this.showWidget(e)&&(this.options=e,window.fwSettings.originUrl=this.origin,window.fwSettings.options=e,this.createMountPoint(),this.loadIFrame(),this.loadJS())},createMountPoint:function(){var e=document.createElement("div");e.id="freshworks-container",e.style.width="0px",e.style.height="0px",e.style.bottom="0px",e.style.right="0px",e.style.zIndex=Number.MAX_SAFE_INTEGER,e.setAttribute("data-html2canvas-ignore",!0),document.body.appendChild(e);var t=i(1),n=document.createElement("link");n.id="freshworks-frame",n.rel="stylesheet",n.href=t,document.head.appendChild(n)},loadIFrame:function(){var e=document.createElement("iframe");e.setAttribute("title","FreshworksWidget"),e.setAttribute("id","freshworks-frame"),e.setAttribute("data-html2canvas-ignore",!0),e.style.display="none",e.onload=function(){var t=document.createElement("link");t.setAttribute("rel","preconnect"),t.setAttribute("href","https://widget.freshworks.com/widgetBase"),e.contentDocument.head.appendChild(t)},document.body.appendChild(e),this._frame=e;var t=e.contentDocument||e.document;t.open();var i='<script src="'.concat("https://widget.freshworks.com/widgetBase",'/widget.js" async defer><\/script>');t.write(i),t.close(),window.addEventListener?window.addEventListener("message",this.handleMessage.bind(this),!0):window.attachEvent("message",this.handleMessage.bind(this),!0)},loadJS:function(){if(this.isFrustrationTrackingEnabled()){var e=this.frustrationTrackingData();if(e&&!window.FM&&!r()){var t=document.createElement("script");t.src="".concat("https://cdn.freshmarketer.com","/").concat(e.org_id,"/").concat(e.project_id,".js"),t.async=!0,document.body.appendChild(t)}}},helpWidgetMethods:function(e,t,i){if(e&&c[e]&&a(Object.keys(o),e))return c[e](t,i)},widgetRenderComplete:function(){var e=window.FreshworksWidget&&window.FreshworksWidget.q||[];window.FreshworksWidget=this.helpWidgetMethods,e.forEach(function(e){window.FreshworksWidget.apply(null,e)}),this.postMessage(o.boot)},handleMessage:function(e){var t=e.data,i=t.eventName,n=t.data;(i||"function"==typeof this[i])&&this[i](n)},postMessage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._frame.contentWindow.postMessage({eventName:e,data:t},a(this.origin,"file://")?null:this.origin)},boot:function(){this._frame.contentWindow.Widget.mount(this.origin),this.postMessage(o.boot)},isFrustrationTrackingEnabled:function(){var e=this.options,t=e.meta,i=e.settings,n=e.components;return t&&t.data_version&&n?n.frustration_tracking&&Boolean(n.frustration_tracking.enabled):Boolean(i.components.predictive_support)},frustrationTrackingData:function(){var e=this.options,t=e.meta,i=e.settings,n=e.freshmarketer;return t&&t.data_version?n:i.freshmarketer},open:function(e,t){var i=(e||{}).widgetType;if(e&&i&&a(n,i)){if(!this.isFrustrationTrackingEnabled()&&!r())return;this._frame.contentWindow.Widget.el||this._frame.contentWindow.Widget.mount(this.origin,e.widgetType)}this.postMessage(o.open,{cardType:e,data:t})},close:function(){this.postMessage(o.close)},prefill:function(e,t){this.postMessage(o.prefill,{formName:e,formFields:t})},identify:function(e,t){this.postMessage(o.identify,{formName:e,formFields:t})},disable:function(e,t){this.postMessage(o.disableFormFields,{formName:e,formFields:t})},clear:function(e){this.postMessage(o.clear,{formName:e})},hide:function(e,t){e?t?this.postMessage(o.hideFormFields,{formName:e,formFields:t}):"launcher"===e&&this.postMessage(o.hideLauncher):this.postMessage(o.hide)},show:function(e){"launcher"===e?this.postMessage(o.showLauncher):this.postMessage(o.show)},hideChoices:function(e,t){this.postMessage(o.hideChoices,{formName:e,formFieldsAndChoices:t})},setLabels:function(e){this.postMessage(o.setLabels,e)},updateSettings:function(e){this.postMessage(o.updateSettings,e)},updatePreviewSettings:function(e){this.postMessage(o.updatePreviewSettings,e)},reloadComponents:function(){this.postMessage(o.reloadComponents)},destroy:function(){this._frame.contentWindow.Widget.unmount()},authenticate:function(e){var t=e.callback,i=e.token,n=t&&"function"==typeof t,s="function"==typeof this.authenticateCallback,r=n||s;n&&(this.authenticateCallback=t),this.postMessage(o.authenticate,{token:i,hasCallback:r})},logout:function(){this.postMessage(o.logout)}};c.init()}]);
  }
})
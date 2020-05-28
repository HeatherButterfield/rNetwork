new window.Vue({
  el: '#app',
  components: {
    'old-header': window.httpVueLoader('https://rnetwork.imfast.io/production/components/OldHeader.vue'),
    'old-footer': window.httpVueLoader('https://rnetwork.imfast.io/production/components/OldFooter.vue'),
  },
})

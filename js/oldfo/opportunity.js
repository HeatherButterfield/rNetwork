new window.Vue({
  el: '#app',
  components: {
    'old-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/OldHeader.vue'),
    'old-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/OldFooter.vue'),
  },
  data: () => ({
    data: data,
  }),
  created() {
    $(function(){
        $(".video").videoPopup();
    });
  }
})

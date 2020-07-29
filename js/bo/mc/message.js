new window.Vue({
  el: '#app',
  data: () => ({
    data: data,
    requestToken: data.xsrfRequestToken,
    message: '',
    id: '',
    skip: 0,
    take: 10,
    status: ''
  }),
  methods: {
    getMessage() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/message?id=' + this.id,
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data);
          var doc = new DOMParser().parseFromString(data.result, "text/html");
          self.message = doc.querySelector('table').outerHTML;
				}
			});
    },
    goBack() {

    },
    getQueryStrings() {
      this.id = this.getUrlParameter('id');
      this.skip = this.getUrlParameter('skip');
      this.take = this.getUrlParameter('take');
      this.status = this.getUrlParameter('status');
    },
    getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
  },
  mounted() {
    this.getQueryStrings();
    this.getMessage();
  }
})

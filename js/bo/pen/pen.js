new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
    'pen-card': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/PenCard.vue'),
  },
  data: () => ({
    data: data,
    requestToken: data.xsrfRequestToken,
    user: {},
    pen: [],
    penCount: 0,
    filter: '',
    token: '',
    skip: 0,
    take: 10
  }),
  methods: {
    getQueryStrings() {
      this.token = this.getUrlParameter('token');
      this.skip = this.getUrlParameter('skip');
      this.take = this.getUrlParameter('take');
      this.skip = isNaN(this.skip) ? 0 : parseInt(this.skip, 10);
      this.take = isNaN(this.take) ? 0 : parseInt(this.take, 10);
    },
    getUser() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/details?token=' + this.token,
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.user = data.result;
				}
			});
    },
    getPen() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/pen?token=' + this.token + '&skip=' + this.skip + '&take=' + this.take + '&typenum=1',
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.pen = data.result;
				}
			});
    },
    getPenFilter() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/pen?token=' + this.token + '&skip=0&take=10&typenum=1&filter=' + this.filter,
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.pen = data.result;
				}
			});
    },
    getPenCount() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/pen/count?token=' + this.token + '&typenum=1',
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.penCount = isNaN(data.result) ? 0 : parseInt(data.result, 10);
				}
			});
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
    this.getUser();
    this.getPen();
    this.getPenCount();
  }
})

new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
  },
  data: () => ({
    data: data,
    requestToken: data.xsrfRequestToken,
    messageCount: 0,
    unreadMessageCount: 0,
    messages: [],
    skip: 0,
    take: 10
  }),
  methods: {
    getUnreadMessageCount() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/messages/count?token=' + this.data.appUserToken + '&status=unread',
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.unreadMessageCount = data.result;
				}
			});
    },
    getMessages() {
      var self = this;
			$.ajax({
				method: "GET",
				url: '/api/appuser/messages?token=' + this.data.appUserToken + '&skip=' + this.skip + '&take=' + this.take  + '&status=unread',
        headers: { "RequestVerificationToken": this.requestToken, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
          console.log(error)
				},
				success: function(data) {
          console.log(data.result);
          self.messages = data.result;
				}
			});
    },
    getQueryStrings() {
      this.skip = this.getUrlParameter('skip');
      this.take = this.getUrlParameter('take');
      this.skip = isNaN(this.skip) ? 0 : parseInt(this.skip, 10);
      this.take = isNaN(this.take) ? 0 : parseInt(this.take, 10);
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
    this.getUnreadMessageCount();
    this.getMessages();
  }
})

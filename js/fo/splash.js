new window.Vue({
  el: '#app',
  data: () => ({
    data: data,
    countries: [],
    token: data.xsrfRequestToken,
		modelState: {},
  }),
  mounted() {
    this.getCountries();
  },
  methods: {
		getCountries: function() {
			var self = this;
			$.ajax({
				method: "GET",
				url: '/api/countries?open=true',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
				error: function(error) {
					// Here's where the model state errors get set
          console.log(error);
				},
				success: function(data) {
          self.countries = data.result;
          console.log(self.countries);
				}
			});
		}
  },
})

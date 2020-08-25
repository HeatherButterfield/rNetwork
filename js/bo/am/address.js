new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
  },
  data: () => ({
    data: data,
    addressLine1: data.appUser.addressLine1,
    addressLine2: data.appUser.addressLine2,
    mainCity: data.appUser.city,
    state: data.appUser.state,
    country: data.appUser.country,
    postalCode: data.appUser.postalCode,
    token: data.xsrfRequestToken,
		modelState: {},
  }),
  mounted() {
    if (!this.data.appUserIsSignedIn) {
      window.location.replace("/account");
    }
    global.actions.updateCityOptions(this.country, $('[name="state"]'), this.state);
  },
  methods: {
		processModelState: function(response, vm) {
			vm.modelState = {};
			if(response) {
        document.querySelector('.account-loader').style.display = 'none';
				$.each(response, function(i, state) {
					var message = "";
					var stateErrors = response[i].Value;
					if(stateErrors)
					{
						$.each(stateErrors, function (j, stateError) {
							if (j > 0) {
								message += "; ";
							}
							message += stateError;
						});
						vm.$set(vm.modelState, state.Key, message);
					}
				});
			}
		},
		submit: function(event) {
      document.querySelector('.account-loader').style.display = 'block';
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}
			// Need to capture this
			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "PUT",
				url: '/api/appuser/address/update',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({AddressLine1: this.addressLine1, AddressLine2: this.addressLine2, City: this.mainCity, State: this.state, Country: this.country, PostalCode: this.postalCode,}),
				error: function(error) {
					// Here's where the model state errors get set
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
            document.querySelector('.account-loader').style.display = 'none';
          }
				},
				success: function(data) {
          window.location.replace('/r/bo/account/details');
				}
			});
		}
  },
})

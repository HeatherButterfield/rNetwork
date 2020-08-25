new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
  },
  data: () => ({
    data: data,
    token: data.xsrfRequestToken,
		modelState: {},
  }),
  mounted() {

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
		getAccountBalance() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/account/balance',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getCountries() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/countries',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getCountryServices() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/country/' + iso2 + '/services',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getServiceAgreement() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/country/' + iso2 + '/service/' + serviceId + '/agreement',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getUsers() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/users',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getUser() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/user/' + userId,
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    updateUser() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "PUT",
				url: '/api/rpay/user/' + userId,
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    createUser() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "POST",
				url: '/api/rpay/user/',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    getUserDetails() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/user/' + userId + '/details',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    updateUserDetails() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "GET",
				url: '/api/rpay/user/' + userId + '/details',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    initiatePayout() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "POST",
				url: '/payout/initiate',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		},
    processPayout() {
			this.modelState = {};

			// Clear the modelState before submission
			for (var error in this.modelState) {
				delete this.modelState[error];
			}

			var self = this;
      console.log(this.data.appUserToken);
			$.ajax({
				method: "POST",
				url: '/payout/' + payoutId + '/process',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({Info: this.info}),
				error: function(error) {
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          //do something
				}
			});
		}
  },
})

new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/' + data.cloudDirectory + '/components/Footer.vue'),
  },
  data: () => ({
    data: data,
    enterPayment: 'new',
    error: '',
    paymentToken: '',
    fname: '',
    lname: '',
    zip: '',
    type: '',
    exp: '',
    number: '',
    checkboxError: false,
    checked: false,
    token: data.xsrfRequestToken,
		modelState: {},
  }),
  mounted() {
    let vm = this;
    this.configure();
    if (!this.data.appUserIsSignedIn) {
      window.location.replace("/account");
    }
  },
  methods: {
    configure() {
      window.CollectJS.configure({
        variant: 'inline',
        invalidCss: {
            color: '#D23600'
        },
        validCss: {
            color: '#4E86A9'
        },
        customCss: {
            'border-color': '#ffffff',
            'border-style': 'solid'
        },
        focusCss: {
            'border-color': '#E9D2A6',
            'border-style': 'solid',
            'border-width': '3px'
        },
        fields: {
            cvv: {
                placeholder: 'CVV'
            },
            ccnumber: {
                placeholder: 'Credit Card'
            },
            ccexp: {
                placeholder: 'MM / YY'
            }
        },
        callback: (token) => {
          console.log(token);
          this.finishSubmit(token)
        },
      });
    },
    finishSubmit(response) {
      this.paymentToken = response.token;
      this.type = response.card.type;
      this.exp = response.card.exp;
      this.number = response.card.number;
      this.submit();
    },
    handleSubmit() {
      if (this.checked) {
        document.querySelector('.account-loader').style.display = 'block';
        window.CollectJS.startPaymentRequest();
      }
      else {
        this.checkboxError = true;
      }
    },
    processModelState: function(response, vm) {
			vm.modelState = {};
			if(response) {
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
				url: '/api/appuser/paywithcommission/disable',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({AppUserID: this.data.appUser.id, PaymentToken: this.paymentToken, Type: this.type, Expiration: this.exp, Number: this.number, FirstName: this.fname, LastName: this.lname, PostalCode: this.zip, UseCardOnFile: false}),
				error: function(error) {
					// Here's where the model state errors get set
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
            document.querySelector('.account-loader').style.display = 'none';
          }
				},
				success: function(data) {
          window.location.replace('/account/commissions');
				}
			});
		},
    submitExisting: function(event) {
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
				url: '/api/appuser/paywithcommission/disable',
        headers: { "RequestVerificationToken": this.token, "token": this.data.appUserToken },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
        data: JSON.stringify({AppUserID: this.data.appUser.id, UseCardOnFile: true}),
				error: function(error) {
					// Here's where the model state errors get set
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          window.location.replace('/account/commissions');
				}
			});
		}
  },
})

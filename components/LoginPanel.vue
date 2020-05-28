<template>
  <div>
    <!--login wrapper-->
    <div id="login-wrapper">
        <!--login panel - zindex 90-->
        <div id="login-form" class="login-panel padding-all font-light login-bg-color box">
            <!--close button-->
            <div class="login-panel-close"><a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close_4x.png" alt="close-login"/></a></div>

            <h2 data-translate="true">Login</h2>

            <span data-translate="true" class="required-temp box link-underscore-white field-validation-error" v-if="modelState.error">{{ modelState.error }}</span>

            <!--login form-->
            <div class="box">
                <div class="form-group">
                    <label data-translate="true">Member ID</label>
                    <input type="text" name="LoginName" v-model="form.LoginName">
					          <span data-translate="true" class="required-temp box link-underscore-white field-validation-error" v-if="modelState['LoginName'] !== undefined">{{ modelState.LoginName }}</span>
                </div>

                <div class="form-group">
                    <label data-translate="true">Password</label>
                    <input type="password" name="Password" v-model="form.Password">
					          <span data-translate="true" class="required-temp box link-underscore-white field-validation-error" v-if="modelState['Password'] !== undefined">{{ modelState.Password }}</span>
                </div>

                <!--submit-->
                <button data-translate="true" type="button" class="login-button" @click="submit">Login</button>

                <!--reroute link-->
                <div data-translate="true" class="back-link link-underscore forget-password"><a href="#password-reset-form">Forget your password?</a></div>
            </div>
        </div>

        <!--password reset form-->
        <div id="password-reset-form" class="login-panel padding-all font-light login-bg-color box">
            <!--close button-->
            <div class="login-panel-close"><a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close_4x.png" alt="close-login"/></a></div>

            <h2 data-translate="true">Password Reset</h2>
            <p data-translate="true">Enter your Member ID below, and we'll get your password reset in no time.</p>

            <!--password reset form-->
            <form class="box" action="">
                <div class="form-group">
                    <label data-translate="true">Member ID</label>
                    <input type="number">
                </div>

                <!--submit-->
                <button data-translate="true" type="button" class="login-button">Reset Password</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
	name: 'LoginPanel',
	data: () => ({
    token: data.xsrfRequestToken,
		modelState: {},
		form: {
			LoginName: '',
			Password: '',
		},
    }),
	methods: {
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
			console.log(this.form.LoginName);
			$.ajax({
				method: "POST",
				url: '/api/login',
        headers: { "RequestVerificationToken": this.token },
				processData: false,
				contentType: 'application/json',
				dataType: 'json',
                data: JSON.stringify({LoginName: this.form.LoginName, Password: this.form.Password}),
				error: function(error) {
					// Here's where the model state errors get set
          console.log(error)
          if (error) {
            self.processModelState(error.responseJSON.result, self);
          }
				},
				success: function(data) {
          window.location.replace('/account');
				}
			});
		}
    },
}
</script>

<style>

</style>

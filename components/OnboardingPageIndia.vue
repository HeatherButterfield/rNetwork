<template>

<!---main--->
		<!---------------------------------------------------------------------------------------------->
		<main class="site-content">

			<!--main-wrapper-->
			<div id="main-wrapper" class="clear-top-margin">
				<!--heading block-->
                <div class="padding-sides box block-resize-narrw center-text">
                    <h1 class="padding-header box">Two Ways to Join</h1>
                    <p class="subhead">There are two ways to enjoy the benefits of rNetwork. Each offer unique opportunities to become part of our growing community.</p>
                </div>

								<!--content block-->
								<div class="flex-center card-box padding-all box">
									<figure>
										<!--graphic-->
										<div id="content-bg-31" class="img"></div>

										<!--content-->
										<figcaption>
											<h4>Become a Charter Member</h4>
											<p>If you are ready to join a community of like-minded people and participate in amazing opportunity, while benefiting from our full suite of products, become a Charter Member today.</p>
											<p class="post-script"><strong>IMPORTANT! To become a Charter Member in India, the process begins with your Free FANN Membership enrollment, then continues into your Charter Member enrollment.</strong></p>

											<!--cta-->
											<div class="cta-button"><a href="/onboarding?route=CharterMember">Join Now</a></div>
										</figcaption>
									</figure>

									<figure>
										<!--graphic-->
										<div id="content-bg-32" class="img"></div>

										<!--content-->
										<figcaption>
											<h4>Join As FANN</h4>
											<p>If you are looking to simply become a customer of rNetwork, save money on some of life’s largest purchase decisions and experience some of the benefits of the network, the no-cost FANN option is the choice for you.</p>

											<!--cta-->
											<div class="cta-button"><a href="/onboarding?route=Fann">Join Now</a></div>
										</figcaption>
									</figure>
								</div>
			</div>
			<!---------------------------------------------------------------------------------------------->
		</main>

</template>

  <script>

  module.exports = {
    name: 'OnboardingPageIndia',
    data: () => ({
      data: data
    }),
    methods: {
      setCookie(name, value, days) {
          var expires = "";
          if (days) {
              var date = new Date();
              date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
              expires = "; expires=" + date.toUTCString();
          }
          document.cookie = name + "=" + (value || "") + expires + "; path=/";
      },
      getCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) === ' ') c = c.substring(1, c.length);
              if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
      },
      eraseCookie(name) {
          document.cookie = name + '=; Max-Age=-99999999;';
      }
    },
    created() {
	    $(function(){
	        $(".video").videoPopup();
	        console.log("encode", $('.video').length);
	    });
	  }
  }
  </script>

<template>

		<!---main--->
				<!---------------------------------------------------------------------------------------------->
				<main class="site-content">
					<!--main wrapper-->
					<div id="main-wrapper">
		                <!--hero-->
		                <div id="opportunity-hero-wrapper" class="flex-spacebetween-reverse flex-align-center clear-top-margin">
		                    <!--graphic block-->
		                    <div id="opportunity-hero" class="flex-spacebetween two-third-split">
		                        <div id="opportunity-hero-bg5" class="graphic-collage-full"></div>
		                        <div id="opportunity-hero-bg6" class="graphic-collage-thirds"></div>
		                        <div id="opportunity-hero-bg7" class="graphic-collage-thirds"></div>
		                        <div id="opportunity-hero-bg8" class="graphic-collage-thirds"></div>
		                    </div>

		                    <!--text block-->
		                    <div class="padding-all box one-third-split">
		                        <h1>Getting started with rNetwork.</h1>
		                        <p class="subhead">Take back control of your life. Save where the masses can’t, make money where the masses don’t.</p>

		                        <!--cta-->
		                        <div class="cta-button"><a href="/r/onboarding/routes">Join Now</a></div>
		                    </div>
		                </div>

						<!--content block-->
		                <div class="box padding-sides center-text block-resize block-statement">
		                    <h2 class="padding-header box">Join rNetwork</h2>
							<p class="subhead">There are 2 ways you can join rNetwork: FANN or Charter Member. Both options allow you to participate in our products and services, however, <strong>only a Charter Member can earn commissions on product purchases within their organization.</strong></p>
		                </div>

						<!--content block-->
		                <div class="padding-all flex-spacebetween flex-align-center block-resize">
		                    <!--img block-->
		                    <div id="content-bg-9" class="graphic-box fifty-split"></div>

		                    <!--content-->
		                    <div class="padding-sides block-border fifty-split box">
		                        <h2>Become a FANN</h2>

								<article>
		                            <p>As a FANN, you'll be able to ejoy many of our available products and services. And joining is 100% free.</p>
		                        </article>

		                        <!--cta-->
		                        <div class="cta-button"><a href="/onboarding?route=Fann">Become a FANN</a></div>
		                    </div>
		                </div>

						<!--content block-->
		                <div class="padding-all flex-spacebetween-reverse flex-align-center block-resize">
		                    <!--img block-->
		                    <div id="content-bg-10" class="graphic-box fifty-split"></div>

		                    <!--content-->
		                    <div class="padding-sides block-border fifty-split box">
		                        <h2>Become a Charter Member</h2>

								<article>
		                            <p>Upgrade to become a Charter Member by purchasing a product offering from rNetwork and earn commissions on all qualified sales from your team by maintaining the status of being active, by making a purchase of any product or service every month, for only Rs. ~4532 Rupees per month. You also have the opportunity to build your own team of FANNs and other Charter Members.</p>
		                        </article>

		                        <!--cta-->
		                        <div class="cta-button-xl"><a href="/onboarding?route=CharterMember" target="_blank">Become a Charter Member</a></div>
		                    </div>
		                </div>

						<!--content block-->
		                <div class="block-medium block-text-color-2 flex-spacebetween">
							<!--graphic-->
							<div id="full-bg-2" class="graphic-box-split-full three-fourth-split"></div>

		                    <!--content-->
		                    <div class="padding-all box one-fourth-split">
		                        <h2>Build a Team</h2>
		                        <article>
		                            <p>As a Charter Member you can now build a team of other Charter Members and FANNs.</p>
		                            <p>The Power3 Compensation Plan includes 3 parts:</p>
		                            <ul>
		                                <li>A Customer Structure (FANN CLUB)</li>
		                                <li>The Personal Enrollment Network (PEN)</li>
		                                <li>A Synergistic Team Building Structure (TBS)</li>
		                            </ul>

																<p class="link-underscore-blue"><a href="https://rnetwork.imfast.io/static/downloads/rNetwork-Power3-Comp-IN.pdf" target="_blank">Download the Comp Plan Brochure &#62;</a></p>
								</article>

		                        <!--cta-->
		                        <div class="cta-button-xl"><a class="video" video-url="https://vimeo.com/431791820/8f44322825" title="Play video">Watch Comp Plan Video</a></div>
		                    </div>
		                </div>

		                <!--content block-->
		                <div id="opportunity-cm-wrapper" class="padding-all box">
		                    <h2 class="center-text">Become a Charter Member Today!</h2>

		                    <!--block container-->
		                    <div class="flex-spacebetween-reverse flex-align-center block-resize">
		                        <!--img block-->
		                        <div id="content-bg-11" class="graphic-box fifty-split"></div>

		                        <!--content-->
		                        <div class="padding-all block-border fifty-split box">
		                            <h4 class="accent-color">FANN Club</h4>

		                            <article>
										<p>As your team grows you can build a customer base called FANNs. When you enroll FANNs they are assigned to your TBS position. There is no limit to the number of FANNs you can enroll.</p>
										<p class="box-recommended">Only active Charter Members can enroll FANNs. FANNs cannot enroll FANNs.</p>
									</article>

		                            <!--cta-->
		                            <div class="cta-button-xl"><a href="/r/onboarding/routes">Join Now</a></div>
		                        </div>
		                    </div>
		                </div>
					</div>
				</main>

</template>

  <script>

  module.exports = {
    name: 'HomePageIndia',
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

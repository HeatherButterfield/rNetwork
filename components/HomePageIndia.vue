<template>

<!---main--->
		<!---------------------------------------------------------------------------------------------->
		<main class="site-content">

			<!--main-wrapper-->
			<div id="main-wrapper">
				<!--hero-->
                <div id="hero-bg" class="block-hero-radius hero-bg-color relative box-shadow-2">
                    <div class="text-block-hero font-light padding-sides box clear">
                        <h1>Earn Greater Income Today</h1>
                        <p class="subhead">rNetwork positions you on the forefront of a massive opportunity that has the ability to change your life, and the power to create a legacy for your family.</p>

                        <!--cta-->
                        <div v-if="!getCookie('_Alias')" class="cta-button"><a href="/r/requirement">Join Now</a></div>
                        <div v-if="getCookie('_Alias')" class="cta-button"><a href="/r/onboarding/routes">Join Now</a></div>
                    </div>
                </div>

                <!--content block-->
                <div class="box padding-all center-text block-statement">
                    <h2>Our Vision</h2>
                    <p class="subhead">A revolutionary financial movement that is shifting the power and profits from big business to the individual. Through the power of the network we are able to leverage exclusive savings and drive greater income for all who wish to participate.</p>
                </div>

                <!--content block-->
                <div class="padding-all flex-spacebetween flex-align-center block-resize">
                    <!--img block-->
                    <div id="content-bg-1" class="graphic-box fifty-split"></div>

                    <!--content-->
                    <div class="padding-sides block-border fifty-split box">
                        <h2>The power is in the network.</h2>
                        <p>Welcome to rNetwork, a place where the power is shifted back to the individual, where money traditionally captured by big businesses and banks is now being enjoyed by members just like YOU.</p>

                        <!--cta-->
                        <div v-if="getCookie('_Alias')" class="cta-button"><a href="/r/opportunity">Learn More</a></div>
                    </div>
                </div>

                <!--full bg content block-->
                <div id="full-bg-1" class="block-full-bg relative">
                    <!--content-->
                    <div class="text-block-fullbg font-light padding-sides box">
                        <h2>One for all, and all for one—building a network that keeps you winning.</h2>
                        <p>Never forget, alone we are powerless, but as a group, we can change the world.</p>

                        <!--cta-->
                        <div class="cta-button-xl"><a class="video" video-url="https://youtu.be/fGyLkPx5t2k">Watch Presentation</a></div>
                    </div>
                </div>

				<!--content block-->
                <div class="padding-all flex-spacebetween flex-align-center block-resize">
                    <!--img block-->
                    <div id="content-bg-2" class="graphic-box fifty-split"></div>

                    <!--content-->
                    <div class="padding-sides block-border box fifty-split">
						<h2>Increase your earnings—bring <em>your</em> network to <em>our</em> network</h2>
                        <p>This is one of those rare opportunities that only comes along once in a lifetime; so ask yourself, &#8220;Do I want to be a part of a new rapidly growing community of people that is giving the power, the savings, and the money back to the individual?&#8221;</p>
						<p>If your answer is yes, then we invite you to become a member of rNetwork.</p>

                        <!--cta-->
                        <div v-if="!getCookie('_Alias')" class="cta-button"><a href="/r/requirement">Join Now</a></div>
                        <div v-if="getCookie('_Alias')" class="cta-button"><a href="/r/onboarding/routes">Join Now</a></div>
                    </div>
                </div>

				<!--testimonials-->
                <div class="block-testimonial testimonial-bg-color">
                    <div class="padding-all box font-light center-text block-resize">
                        <h2>Make That Decision, Take That Action Today</h2>
                        <h4 class="accent-color">A proven success formula.</h4>
                        <p>&#8220;If you want to have what most don't, you have to do what most are unwilling to do. And you have to do those things today. The journey to your dreams is just one decision and one action away. All my success in life has come from casting away fear, and taking bold action. Make that decision, take that action today. Tomorrow is promised to no one.&#8221;</p>
                        <p><em>Roger Taylor, CMO, rNetwork</em></p>
                    </div>
                </div>
			</div>
			<!---------------------------------------------------------------------------------------------->
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

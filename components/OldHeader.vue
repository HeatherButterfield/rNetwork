<template>
  <div>
    <!--header-->
    <header>
        <!--navigation-->
        <nav class="box">
            <!--logo-->
            <div id="logo">
                <a href="/"><img src="https://rnetworkwebimages.s3-us-west-1.amazonaws.com/logo_rnetwork_1.png" alt="r network logo" /></a>
                <a v-if="getCookie('_CountryID')" href="/country/select"><span class="country-flag" :class="getCookie('_CountryID')">{{getCookie('_CountryID')}}</span></a>
                <a v-if="!getCookie('_CountryID')" href="/country/select"><span class="country-flag US">US</span></a>
            </div>

            <!--top nav-->
            <ul id="top-nav">
              <li v-if="getCookie('_Alias') && getCookie('_CountryID') != 'IN'"><a data-translate="true" href="/r/opportunity">Opportunity</a></li>
              <li v-if="getCookie('_Alias') && getCookie('_CountryID') === 'IN'"><a data-translate="true" href="/r/in/opportunity">Opportunity</a></li>
              <li><a data-translate="true" href="/r/products">Products & Services</a></li>
              <li v-if="getCookie('_Alias')"><a data-translate="true" href="/r/onboarding/routes">Join Now</a></li>
              <li v-if="!getCookie('_Alias')"><a data-translate="true" href="/r/requirement">Join Now</a></li>
              <!--sign in/out-->
              <li v-if="data.appUserIsSignedIn" class="login"><a data-translate="true" href="/account">Account</a></li>
              <li v-if="data.appUserIsSignedIn" class="login"><a data-translate="true" href="/account/logout">Logout</a></li>
              <li v-if="!data.appUserIsSignedIn" class="login"><a data-translate="true" href="/account/login">Login</a></li>

            </ul>

            <div id="hamburger" onclick="global.actions.registerNavIconHandler()"><img src="https://rnetworkwebimages.s3-us-west-1.amazonaws.com/hamburger.png" alt="menu" /></div>

            <!--menu-->
            <div id="menu" class="slide-in-left box">
                <!--close menu-->
                <div id="close-menu" onclick="global.actions.registerNavIconHandler()">X</div>

                <!--menu logo-->
                <div id="menu-logo"><img src="https://rnetworkwebimages.s3-us-west-1.amazonaws.com/logo_rnetwork_1.png" alt="r network logo" /></div>
                <ul>
                    <li><a data-translate="true" href="/">Home</a></li>
                    <li v-if="getCookie('_Alias') && getCookie('_CountryID') != 'IN'"><a data-translate="true" href="/r/opportunity">Opportunity</a></li>
                    <li v-if="getCookie('_Alias') && getCookie('_CountryID') === 'IN'"><a data-translate="true" href="/r/in/opportunity">Opportunity</a></li>
                    <li><a data-translate="true" href="/r/products">Products & Services</a></li>
                    <li v-if="getCookie('_Alias')"><a data-translate="true" href="/r/onboarding/routes">Join Now</a></li>
                    <li v-if="!getCookie('_Alias')"><a data-translate="true" href="/r/requirement">Join Now</a></li>
                    <!--sign in/out-->
                    <li v-if="data.appUserIsSignedIn"><a data-translate="true" href="/account">Account</a></li>
                    <li v-if="data.appUserIsSignedIn"><a data-translate="true" href="/account/logout">Logout</a></li>
                    <li v-if="!data.appUserIsSignedIn"><a data-translate="true" href="/account/login">Login</a></li>

                </ul>

                <div class="flex-center menu-social">
                    <a href="https://www.facebook.com/rnetworkcorp/" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/comms_r"><i class="fab fa-twitter-square" target="_blank"></i></a>
                </div>
            </div>
        </nav>

        <!--translations-->
        <div id="translate-wrapper">
            <div id="translate-block">
                <div id="google_translate_element"></div>
            </div>
        </div>

    </header>
  </div>
</template>

<script>
module.exports = {
  name: 'OldHeader',
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
  mounted() {

  }
}
</script>

<style>

</style>

<template>

<!---header--->
  <!---------------------------------------------------------------------------------------------->
  <header class="flex-align-center box">
    <!--trifold-->
    <div id="trifold" class="nav-icon"><a href="#nav-menu"><img src="https://rnetwork.imfast.io/static/images/trifold_4x.png" alt="trifold menu"/></a></div>

    <!--navigation-->
    <nav>
      <!--mobile menu - zindex 200-->
      <div id="nav-menu" class="box hover-underscore">
        <!--close button-->
        <div id="close-nav-menu"><a href="#"><img src="https://rnetwork.imfast.io/static/images/close-panel-rnetwork.png" alt="close"/></a></div>

        <!--menu - getting started-->
        <ul id="nav-1">
          <h6 class="col-span-all">Getting Started</h6>
          <li v-if="getCookie('_Alias')"><a href="/r/opportunity">Opportunity</a></li>
          <li><a href="/r/products">Products & Services</a></li>
          <li v-if="getCookie('_Alias')"><a href="/r/onboarding/routes">Join Now</a></li>
          <li v-if="!getCookie('_Alias')"><a href="/r/requirement">Join Now</a></li>
          <li v-if="data.appUserIsSignedIn"><a href="/account">Account</a></li>
        </ul>

        <!--menu - additional menu-->
        <ul id="nav-2">
          <li><a href="https://rnetwork.imfast.io/static/downloads/rNetwork-Executive-Team.pdf" target="_blank">Corporate</a></li>
          <li><a href="/r/faq">Support</a></li>
          <li><a href="https://rnetwork-news.blogspot.com" target="_blank">News</a></li>
          <li><a href="https://rnetwork.axomo.com" target="_blank">Swag</a></li>
          <li><a href="/r/policies">Policies & Procedures</a></li>
        </ul>

        <!--sign in-->
        <div id="nav-menu-login" v-if="!data.appUserIsSignedIn"><a href="/account/login" >Sign In &#10140;</a></div>
        <div id="nav-menu-login" v-if="data.appUserIsSignedIn"><a href="/account/logout" >Sign Out &#10140;</a></div>
      </div>

      <!--overlay-->
      <div id="nav-menu-overlay"></div>
    </nav>

    <!--logo - use country initial to indicate access country-->
    <div class="logo">
      <a href="/r/home"><img src="https://rnetwork.imfast.io/static/images/logo_rnetwork.png" alt="rNetwork logo"/></a>

      <!--flag-->
      <a href="/r/country/select"><span class="country-flag" :class="getCookie('_CountryID')">{{getCookie('_CountryID')}}</span></a>
    </div>

    <!--login/logout-->
    <div v-if="!data.appUserIsSignedIn" id="login" class="nav-icon"><a href="/account/login"><img src="https://rnetwork.imfast.io/static/images/login_4x.png" alt="login" /></a></div>
    <div v-if="data.appUserIsSignedIn" id="logout" class="nav-icon"><a href="/account/logout"><img src="https://rnetwork.imfast.io/static/images/login_4x.png" alt="logout" /></a></div>
  </header>

</template>

<script>
module.exports = {
  name: 'Header',
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
}
</script>

<style>

</style>

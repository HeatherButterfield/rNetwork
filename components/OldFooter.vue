<template>
  <div>
    <!--footer-->
    <footer class="box footer-link">
        <!--footer menu wrapper-->
        <div class="flex-spacebetween">
            <!--footer col-->
            <div class="footer-menu box">
                <span data-translate="true" class="footer-title">Company Info</span>
                <ul>
                    <li><a data-translate="true" href="/">Home</a></li>
                    <li><a data-translate="true" href="/r/products">Products & Services</a></li>
                    <li><a data-translate="true" href="/r/founders">Corporate</a></li>
                </ul>
            </div>

            <!--footer col-->
            <div class="footer-menu box">
                <span data-translate="true" class="footer-title">Build Your Network</span>
                <ul>
                    <li v-if="getCookie('_Alias')"><a data-translate="true" href="/r/onboarding/routes">Join Now</a></li>
                    <li v-if="!getCookie('_Alias')"><a data-translate="true" href="/r/requirement">Join Now</a></li>
                    <li><a data-translate="true" href="/account/login">Login</a></li>
                    <li><a data-translate="true" href="/r/faq">Support</a></li>
                    <li><a data-translate="true" href="https://rnetwork-news.blogspot.com" target="_blank">News</a></li>
                    <li><a data-translate="true" href="https://rnetwork.axomo.com" target="_blank">Swag</a></li>
                    <li><a data-translate="true" href="/r/policies">Policies & Procedures</a></li>
                </ul>
            </div>


            <div id="footer-company-info" class="footer-menu box">
                <!--address-->
                <span class="footer-title" data-translate="true">Company Info</span>
                <!--flag-->
                <div><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/usa-flag-rnetwork.png" alt="American Flag - rNetwork" /></div>

                <ul>
                    <li>746 East 1910 South, Suite 2<br>Provo, UT 84606<br>United States</li>
                    <li><strong><span data-translate="true">Refunds & Cancellations</span></strong><br>1-800-889-1716</li>
                </ul>
            </div>
        </div>

        <div class="menu-social box">
            <a href="https://www.facebook.com/rnetworkcorp/" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/comms_r" target="_blank"><i class="fab fa-twitter-square"></i></a>
            <a href="https://www.instagram.com/rnetworkcorporate/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>

        <!--copyright-->
        <div id="copyright">
            Copyright © 2020 <span class="company-name rnetwork"></span>, LLC. All rights reserved.
        </div>
    </footer>
  </div>
</template>

<script>
module.exports = {
  name: 'OldFooter',
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

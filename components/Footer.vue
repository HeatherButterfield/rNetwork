<template>

<!---footer--->
  <!---------------------------------------------------------------------------------------------->
  <footer>
    <!--footer wrapper-->
    <div class="flex-spacebetween footer-padding box">
      <!--footer cta block-->
              <div class="footer-block-1 box">
                  <h3>The Power is in the Network.</h3>
                  <p class="subhead">Build, Save, Earn</p>

                  <!--cta-->
                  <div class="cta-button" v-if="getCookie('_Alias')"><a href="/r/onboarding/routes">Join Now</a></div>
                  <div class="cta-button" v-if="!getCookie('_Alias')"><a href="/r/requirement">Join Now</a></div>
              </div>

      <!--footer rule-->
      <div class="footer-rule"></div>

              <!--footer nav block-->
              <div class="footer-block-2 flex-spacebetween hover-dark box">
                  <ul>
                      <h5>Main Menu</h5>
          <li><a href="/r/home">Home</a></li>
          <li v-if="getCookie('_Alias')"><a href="/r/opportunity">Opportunity</a></li>
          <li><a href="/r/products">Products & Services</a></li>
          <li><a href="https://rnetwork.imfast.io/static/downloads/rNetwork-Executive-Team.pdf" target="_blank">Corporate</a></li>
                  </ul>

                  <ul>
                      <h5>Policies</h5>
          <li><a href="/r/policies">Policies & Procedures</a></li>
                  </ul>

                  <ul>
                      <h5>Additional Info</h5>
                      <li v-if="getCookie('_Alias')"><a href="/r/onboarding/routes">Join Now</a></li>
                      <li v-if="!getCookie('_Alias')"><a href="/r/requirement">Join Now</a></li>
          <li><a href="/account">Back Office</a></li>
          <li><a href="/r/faq">Support</a></li>
                  </ul>

                  <ul>
                      <h5>Resources</h5>
          <li><a href="https://rnetwork-news.blogspot.com" target="_blank">News</a></li>
          <li><a href="https://rnetwork.axomo.com" target="_blank">Swag</a></li>
                  </ul>

        <!--company info - updated 02/19/20-->
        <div id="footer-company-info">
                      <!--address-->
                      <h5>Company Info</h5>
          <!--flag-->
                      <div><img src="https://rnetwork.imfast.io/static/images/usa-flag-rnetwork.png" alt="American Flag - rNetwork"/></div>

                      <p>746 East 1910 South, Suite 2<br>Provo, UT 84606<br>United States</p>
                      <p><strong>Refunds & Cancellations</strong><br>1-800-889-1716</p>
        </div>
              </div>

              <!--footer copyright block-->
              <div class="footer-block-3">
                  <!--social media-->
                  <div class="flex-center hover-lift">
                  <span class="social-icons"><a href="https://www.facebook.com/rnetworkcorp/" target="_blank"><img src="https://rnetwork.imfast.io/static/images/fb.png" alt="facebook"/></a></span>
                              <span class="social-icons"><a href="https://twitter.com/comms_r" target="_blank"><img src="https://rnetwork.imfast.io/static/images/tw.png" alt="twitter"/></a></span>
                              <span class="social-icons"><a href="https://www.instagram.com/rnetworkcorporate/" target="_blank"><img src="https://rnetwork.imfast.io/static/images/ig.png" alt="instagram"/></a></span>
                              <!--<span class="social-icons"><a href="#" target="_blank"><img src="https://rnetwork.imfast.io/static/images/yt.png" alt="youtube"/></a></span>-->
                  </div>

                  <div class="center-text copyright-text">
                      &copy;2020 rNetwork, LLC. All rights reserved.
                  </div>
              </div>
    </div>
  </footer>
    
</template>

<script>

module.exports = {
  name: 'Footer',
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

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
                  <div v-if="!getCookie('_Alias')" class="cta-button"><a href="/r/requirement">Join Now</a></div>
                  <div v-if="getCookie('_Alias')" class="cta-button"><a href="/r/onboarding/routes">Join Now</a></div>
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
          <li><a href="/r/policies/in/terms">Terms of Use</a></li>
          <li><a href="/r/policies/in/refund">Refund/Buyback Policy</a></li>
          <li><a href="/r/policies/in/shipping">Shipping Policy</a></li>
          <li><a href="/r/policies/in/privacy">Privacy Policy</a></li>
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
                  </ul>

                  <!--company info-->
          					<div id="footer-company-info">
                                  <!--address-->
                                  <h5>Company Info</h5>
          						<!--flag-->
                                  <div><img src="https://rnetwork.imfast.io/static/images/flags/in.svg" alt="India Flag - rNetwork"/></div>

          						<p>Flat no. C4-1101<br>The Legend, Sushant Lok,<br>Phase - 3, Sector - 57,<br>Gurugram - 122002<br><a href="mailto:support@rnetworkglobal.in">support@rnetworkglobal.in</a></p>
                                  <p><strong>Grievance Redressal</strong><br>TBA</p>
          						<p><strong>Customer Support</strong><br>TBA</p>
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
  name: 'IndiaFooter',
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

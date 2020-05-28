new window.Vue({
  el: '#app',
  components: {
    'old-header': window.httpVueLoader('https://rnetwork.imfast.io/production/components/OldHeader.vue'),
    'old-footer': window.httpVueLoader('https://rnetwork.imfast.io/production/components/OldFooter.vue'),
  },
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
    if (!this.getCookie('_Alias')) {
      window.location.replace("/r/requirement");
    }
    if (this.getCookie('_CountryID') === 'IN') {
      window.location.replace("/onboarding?route=Fann");
    }
  }
})

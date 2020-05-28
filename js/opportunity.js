new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('../../components/Header.vue'),
    'page-footer': window.httpVueLoader('../../components/Footer.vue'),
    'login-panel': window.httpVueLoader('../../components/LoginPanel.vue'),
    'back-office-panel': window.httpVueLoader('../../components/BackOfficePanel.vue')
  },
})

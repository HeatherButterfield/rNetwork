new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/production/components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/production/components/Footer.vue'),
    'login-panel': window.httpVueLoader('https://rnetwork.imfast.io/production/components/LoginPanel.vue'),
    'back-office-panel': window.httpVueLoader('https://rnetwork.imfast.io/production/components/BackOfficePanel.vue'),
    'shop-menu': window.httpVueLoader('https://rnetwork.imfast.io/production/components/ShopMenu.vue'),
    'shop-card': window.httpVueLoader('https://rnetwork.imfast.io/production/components/ShopCard.vue'),
  },
  data: () => ({
    cards: [
      {
        link: "https://turbotax.intuit.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-turbotax-rnetwork.jpg",
        alt: "Turbo Tax - rNetwork",
        caption: "For over 25 years, TurboTax products have been continuously ranked as the #1 best-selling tax software helping Americans keep more of their hard-earned money.",
        tcr: "4%–12%"
      },
    ],
  }),
  mounted() {
    document.querySelector('#electronics').classList.add('shop-accent');
  }
})

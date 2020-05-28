new window.Vue({
  el: '#app',
  components: {
    'page-header': window.httpVueLoader('https://rnetwork.imfast.io/production//components/Header.vue'),
    'page-footer': window.httpVueLoader('https://rnetwork.imfast.io/production//components/Footer.vue'),
    'login-panel': window.httpVueLoader('https://rnetwork.imfast.io/production//components/LoginPanel.vue'),
    'back-office-panel': window.httpVueLoader('https://rnetwork.imfast.io/production//components/BackOfficePanel.vue'),
    'shop-menu': window.httpVueLoader('https://rnetwork.imfast.io/production//components/ShopMenu.vue'),
    'shop-card': window.httpVueLoader('https://rnetwork.imfast.io/production//components/ShopCard.vue'),
  },
  data: () => ({
    cards: [
      {
        link: "http://www.americancrew.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-americancrew-rnetwork.jpg",
        alt: "american crew - rNetwork",
        caption: "American Crew launched in 1994 and for more than 20 years, we’ve delivered only the best. American Crew is the leading professional men’s grooming brand in the world.",
        tcr: "4.8%"
      },
    ]
  }),
  mounted() {
    document.querySelector('#beauty').classList.add('shop-accent');
  }
})

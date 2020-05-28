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
        link: "http://www.cookiesbydesign.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-cookiesbydesign-rnetwork.jpg",
        alt: "Cookies by Design - rNetwork",
        caption: "Cookies by Design offers creative and delicious gifts, catered to cookie lovers. Our success is built on providing unique products at great prices, exceptional service and timely hand delivery nationwide.",
        tcr: "8.0%"
      },
      {
        link: "http://www.giftcards.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-giftcards-rnetwork.jpg",
        alt: "gift cards - rNetwork",
        caption: "GiftCards.com is the leading online retailer of gift cards with an array of gift card products including personalized Visa® and MasterCard® gift cards, etc.",
        tcr: "0.8%–4%"
      },
      {
        link: "https://www.giftcardmall.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-giftcardmall-rnetwork.jpg",
        alt: "gift card mall - rNetwork",
        caption: "As a premium gifting web site, Giftcardmall.com offers online access to hundreds of the best retail branded gift cards like Nordstrom, Home Depot, iTunes, Starbucks and AMC.",
        tcr: "0.8%–4%"
      },
    ],
  }),
  mounted() {
    document.querySelector('#electronics').classList.add('shop-accent');
  }
})

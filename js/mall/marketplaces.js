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
        link: "http://www.brandsmartusa.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-brandsmart-rnetwork.jpg",
        alt: "Brandsmart - rNetwork",
        caption: "BrandsMart USA is a retail leader in Consumer Electronics and Appliances in South Florida and Atlanta since 1977. They have built a reputation on providing top quality merchandise from leading manufacturers at rock-bottom prices.",
        tcr: "3.2%"
      },
      {
        link: "http://www.tomtop.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-tomtop-rnetwork.jpg",
        alt: "Tomtop - rNetwork",
        caption: "TOMTOP.com is one of China’s top e-commerce export site, providing high quality products at best price. We offer a wide variety of products including Tablet PC & Cellphone, Computer & Networking, etc.",
        tcr: "4.8%"
      },
      {
        link: "http://www.farmandfleet.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-blain-rnetwork.jpg",
        alt: "Blain's Farm & Fleet - rNetwork",
        caption: "We offer over 95,000 different products including nationally recognized brands such as DEWALT, Milwaukee, Craftsman, Carhartt, UnderArmour, carter’s, KitchenAid, Hamilton Beach, Coleman, and more.",
        tcr: "4.0%"
      },
      {
        link: "http://www.aliexpress.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-aliexpress-rnetwork.jpg",
        alt: "AliExpress - rNetwork",
        caption: "AliExpress is an online marketplace created by Alibaba.com. On AliExpress, buyers from more than 200 countries and regions order items in bulk or one at a time — all at low wholesale prices.",
        tcr: "3.2%"
      },
      {
        link: "http://www.banggood.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-banggood-rnetwork.jpg",
        alt: "Bang Good - rNetwork",
        caption: "Banggood.com is one of China’s leading e-commerce platforms. We strive to offer you the best quality goods, service and prices&#8212;Banggood will give you the best bang for your buck!",
        tcr: "2.4%–8%"
      },
      {
        link: "https://www.giftcardmall.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-giftcardmall-rnetwork.jpg",
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

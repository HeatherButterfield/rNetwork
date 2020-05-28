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
        link: "https://www.modernbathroom.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-modernbathroom-rnetwork.jpg",
        alt: "Modern Bathroom - rNetwork",
        caption: "Modern Bathroom is an online leader in bathroom remodeling products, including vanities, sinks, faucets, bathtubs and storage solutions in modern and traditional styles.",
        tcr: "4.0%"
      },
      {
        link: "http://www.tirerack.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-tirerack-rnetwork.jpg",
        alt: "The Tire Rack - rNetwork",
        caption: "Tire Rack is leading the way in online tire, wheel and performance automotive accessory sales. Tire Rack has developed and continues to enhance the most sophisticated web site in the industry.",
        tcr: "4.8%"
      },
      {
        link: "http://www.trampolinepartsandsupply.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-trampolineparts-rnetwork.jpg",
        alt: "Trampoline Parts - rNetwork",
        caption: "We offer a full selection of trampolines, trampoline parts, trampoline pads, mats, springs, enclosures, in any shape or size. We have the best quality along with the best prices!",
        tcr: "8.0%"
      },
      {
        link: "http://www.4wheelparts.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-4wheelparts-rnetwork.jpg",
        alt: "4 Wheel Parts - rNetwork",
        caption: "4 Wheel Parts is the recognized leader in the category of Off-Road Parts and Accessories. Truck, Jeep and SUV drivers know the 4 Wheel Parts brand and trust it.",
        tcr: "3.2%"
      },
      {
        link: "http://www.brandsmartusa.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-brandsmart-rnetwork.jpg",
        alt: "Brandsmart - rNetwork",
        caption: "BrandsMart USA is a retail leader in Consumer Electronics and Appliances in South Florida and Atlanta since 1977. They have built a reputation on providing top quality merchandise from leading manufacturers at rock-bottom prices.",
        tcr: "3.2%"
      },
      {
        link: "http://www.farmandfleet.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-blain-rnetwork.jpg",
        alt: "Blain's Farm & Fleet - rNetwork",
        caption: "We offer over 95,000 different products including nationally recognized brands such as DEWALT, Milwaukee, Craftsman, Carhartt, UnderArmour, carter’s, KitchenAid, Hamilton Beach, Coleman, and more.",
        tcr: "4.0%"
      },
      {
        link: "http://www.kitchenaid.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-kitchenaid-rnetwork.jpg",
        alt: "Kitchenaid - rNetwork",
        caption: "From stand mixers to cookware, coffee makers to toasters, KitchenAid® is a dependable and quality household name.",
        tcr: "4.0%"
      },
      {
        link: "http://www.vitamix.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-vitamix-rnetwork.jpg",
        alt: "Vitamix - rNetwork",
        caption: "Vitamix® is passionate about liberating and nourishing the zest for life. This passion drives us to design, develop, and produce award-winning blending technology.",
        tcr: "2.4%–6.4%"
      },
      {
        link: "http://www.overstock.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-overstock-rnetwork.jpg",
        alt: "overstock - rNetwork",
        caption: "Overstock.com, Inc. (NASDAQ:OSTK) is an online shopping retailer based in Salt Lake City, Utah that sells a broad range of products at low prices including furniture, rugs, bedding, electronics, clothing, and jewelry.",
        tcr: "0.8%–8%"
      },
      {
        link: "http://www.clickandgrow.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-clickgrow-rnetwork.jpg",
        alt: "Click & Grow - rNetwork",
        caption: "Click & Grow specialises in smart gardens that help anyone grow fresh food at home with 0 effort. Our technology takes care of plants automatically, making sure they always have enough light, nutrients, and water.",
        tcr: "8%"
      },
      {
        link: "https://www.freshmealplan.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-freshmealplan-rnetwork.jpg",
        alt: "Fresh Meal Plan - rNetwork",
        caption: "Fresh Meal Plan provides the perfect weekly meal options for those with an active lifestyle. Traditional, Paleo, Vegan, and Keto plans are available, each prepared with quality, healthful ingredients and delivered directly to your door.",
        tcr: "$24 USD"
      },
    ],
  }),
  mounted() {
    document.querySelector('#electronics').classList.add('shop-accent');
  }
})

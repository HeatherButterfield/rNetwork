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
        link: "https://www.areatrend.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-areatrend-rnetwork.jpg",
        alt: "AreaTrend - rNetwork",
        caption: "AreaTrend specializes in name brand luxury goods, in addition to some up-and-coming brands we love: Nike, Michael Kors, Hunter, Ray-Ban, Fossil, Asics, Adidas, Oakley, Vans, Swatch, Movado&#8230;the list goes on.",
        tcr: "4.0%"
      },
      {
        link: "http://www.shoeline.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-shoeline-rnetwork.jpg",
        alt: "shoeline.com - rNetwork",
        caption: "Shoeline.com carries a wide variety of footwear brands including Born, Sofft, Double H Boots, and many more brands that serve many lifestyles.",
        tcr: "8.0%"
      },
      {
        link: "http://www.nike.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-nike-rnetwork.jpg",
        alt: "Nike - rNetwork",
        caption: "A pioneer in sportswear, footwear and equipment, Nike has dominated the field of sports and fashion since its launch in 1971.",
        tcr: "0.8%–2.4%"
      },
      {
        link: "https://www.happyfeet.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-happyfeet-rnetwork.jpg",
        alt: "Happy Feet Plus - rNetwork",
        caption: "  Happy Feet Plus has been a proud retailer of health and comfort footwear since 1985. Our featured brands include Birkenstock, Birkis, Finn Comfort, and more.",
        tcr: "6.4%"
      },
      {
        link: "http://www.columbia.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-columbia-rnetwork.jpg",
        alt: "Columbia - rNetwork",
        caption: "Columbia Sportswear has been creating innovative apparel, footwear, accessories and equipment for outdoor enthusiasts since 1938.",
        tcr: "6.40%"
      },
      {
        link: "http://www.touchofmodern.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-touchofmodern-rnetwork.jpg",
        alt: "Touch of Modern - rNetwork",
        caption: "Touch of Modern specializes in bringing high quality, ultra-modern design to customers at affordable prices.",
        tcr: "2%–8%"
      },
      {
        link: "http://www.jimmyjazz.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-jimmyjazz-rnetwork.jpg",
        alt: "jimmy jazz - rNetwork",
        caption: "Jimmy Jazz is the largest urban clothing and sneaker retailer in the United States, offering the hottest urban brands of clothing, accessories and footwear for men, women and kids.",
        tcr: "0.8%"
      },
      {
        link: "https://www.usoutdoor.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-usoutdoor-rnetwork.jpg",
        alt: "USOutdoor - rNetwork",
        caption: "US Outdoor is one of the leading outdoor gear and apparel stores online since 1957, specializing in high quality performance outdoor clothing and equipment.",
        tcr: "6.4%"
      },
      {
        link: "http://www.aliexpress.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-aliexpress-rnetwork.jpg",
        alt: "AliExpress - rNetwork",
        caption: "AliExpress is an online marketplace created by Alibaba.com. On AliExpress, buyers from more than 200 countries and regions order items in bulk or one at a time — all at low wholesale prices.",
        tcr: "3.2%"
      },
      {
        link: "https://benhogangolf.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-benhogan-rnetwork.jpg",
        alt: "Ben Hogan - rNetwork",
        caption: "Ben Hogan Golf is the only golf equipment company that sells directly on our own website with no retail partners, providing tour-quality golf equipment at factory-direct pricing.",
        tcr: "4.8%"
      },
    ],
    country: [
      {
        link: "https://www.footshop.eu/en-uk/",
        img: "https://rnetwork.imfast.io/static/images/shop-footshopUK-rnetwork.jpg",
        alt: "FootShop UK - rNetwork",
        caption: "You can find women's, men's and children's footwear at Footshop.com, as well as branded skate, hip-hop and sneaker shoes, caps, backpacks, wallets and a lot more.",
        tcr: "6.4%–8%"
      },
      {
        link: "http://www.columbiasportswear.ca/",
        img: "https://rnetwork.imfast.io/static/images/shop-columbiacanada-rnetwork.jpg",
        alt: "Columbia Canada - rNetwork",
        caption: "Columbia Sportswear Canada is a leading global outdoor apparel, footwear, accessories, and equipment company, producing innovative products for outdoor enthusiasts since 1938.",
        tcr: "6.4%"
      },
      {
        link: "http://www.mountainhardwear.ca/",
        img: "https://rnetwork.imfast.io/static/images/shop-mountainhardwear-rnetwork.jpg",
        alt: "Mountain Hardwear Canada - rNetwork",
        caption: "Mountain Hardwear Canada is a leader in innovative, premium outdoor apparel, equipment and accessories.",
        tcr: "6.4%"
      },
      {
        link: "http://www.sorelfootwear.ca/",
        img: "https://rnetwork.imfast.io/static/images/shop-sorelcanada-rnetwork.jpg",
        alt: "Sorel Canada - rNetwork",
        caption: "SOREL Canada brings its functionality and heritage of expert craftsmanship to the modern world of fashion, where it is inspiring a new generation of doers, builders, and creators.",
        tcr: "6.4%"
      },
    ]
  }),
  mounted() {
    document.querySelector('#apparel').classList.add('shop-accent');
  }
})

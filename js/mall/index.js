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
        link: "https://www.iolo.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-iolo-rnetwork.jpg",
        alt: "iolo - rNetwork",
        caption: "iolo is widely recognized by both consumers and industry experts as a worldwide leader in the system utility software market.",
        tcr: "8.0%–48%"
      },
      {
        link: "https://www.withings.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-withings-rnetwork.jpg",
        alt: "withings - rNetwork",
        caption: "Withings is forging the digital health frontier with an ecosystem of award-winning products and services including activity trackers, scales, thermometers, blood pressure monitors, and sleep captors.",
        tcr: "5.6%"
      },
      {
        link: "http://www.fatbraintoys.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-fatbraintoys-rnetwork.jpg",
        alt: "Fat Brain Toys - rNetwork",
        caption: "Fat Brain Toys&reg; is a retailer and developer of unique specialty toys, games, and gifts.",
        tcr: "4.8%"
      },
      {
        link: "http://www.abcmouse.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-abcmouse-rnetwork.jpg",
        alt: "ABCMouse - rNetwork",
        caption: "ABCmouse.com, Adventure Academy, and ReadingIQ were all created with the purpose of helping children everywhere build a strong foundation for academic success and to foster a lifelong love of learning.",
        tcr: "up to 4%"
      },
      {
        link: "http://www.gamersgate.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-gamersgate-rnetwork.jpg",
        alt: "gamersgate - rNetwork",
        caption: "GamersGate is the world’s largest online store for PC and Mac games, (4500+ games). It is online digital digital distribution platform creating easily accessible gaming experiences for gamers worldwide&#8212;anytime, anywhere.",
        tcr: "4.0%"
      },
      {
        link: "http://www.cookiesbydesign.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-cookiesbydesign-rnetwork.jpg",
        alt: "Cookies by Design - rNetwork",
        caption: "Cookies by Design offers creative and delicious gifts, catered to cookie lovers. Our success is built on providing unique products at great prices, exceptional service and timely hand delivery nationwide.",
        tcr: "8.0%"
      },
      {
        link: "http://www.trampolinepartsandsupply.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-trampolineparts-rnetwork.jpg",
        alt: "Trampoline Parts - rNetwork",
        caption: "We offer a full selection of trampolines, trampoline parts, trampoline pads, mats, springs, enclosures, in any shape or size. We have the best quality along with the best prices!",
        tcr: "8.0%"
      },
      {
        link: "http://www.4wheelparts.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-4wheelparts-rnetwork.jpg",
        alt: "4 Wheel Parts - rNetwork",
        caption: "4 Wheel Parts is the recognized leader in the category of Off-Road Parts and Accessories. Truck, Jeep and SUV drivers know the 4 Wheel Parts brand and trust it.",
        tcr: "3.2%"
      },
      {
        link: "https://www.redbox.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-redbox-rnetwork.jpg",
        alt: "Nike - rNetwork",
        caption: "With 6 billion billion+ rentals to date, Redbox is America's leading destination for affordable new-release movies and entertainment with more ways to watch than any other home entertainment provider",
        tcr: "1.6%–3.2%"
      },
      {
        link: "http://www.staples.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-staples-rnetwork.jpg",
        alt: "Staples - rNetwork",
        caption: "Worklife solutions for all. We’ll help you find solutions in the categories that matter most: business essentials, technology, facilities and breakroom, furniture, print and promotional products.",
        tcr: "0.8%–4%"
      },
      {
        link: "http://www.bjs.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-bj-rnetwork.jpg",
        alt: "BJ's Wholesale Club - rNetwork",
        caption: "BJ’s Wholesale Club, Inc. (BJs.com), is a leading operator of membership warehouse clubs in the Eastern United States with over 216 Clubs in 16 states from Maine to Florida, and offers a variety of special benefits to its members.",
        tcr: "0.8%–2.4%"
      },
      {
        link: "http://www.nike.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-nike-rnetwork.jpg",
        alt: "Nike - rNetwork",
        caption: "A pioneer in sportswear, footwear and equipment, Nike has dominated the field of sports and fashion since its launch in 1971.",
        tcr: "0.8%–2.4%"
      },
      {
        link: "http://www.tigerdirect.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-tigerdirect-rnetwork.jpg",
        alt: "Tiger Direct - rNetwork",
        caption: "Tiger Direct is one of the industry leaders in computer parts and accessories. Customers want to buy products from a name they trust.",
        tcr: "0.8%–2.4%"
      },
      {
        link: "http://www.giftcards.com/",
        img: "https://rnetwork.imfast.io/static/images/shop-giftcards-rnetwork.jpg",
        alt: "gift cards - rNetwork",
        caption: "GiftCards.com is the leading online retailer of gift cards with an array of gift card products including personalized Visa® and MasterCard® gift cards, etc.",
        tcr: "0.8%–4%"
      },
    ]
  }),
  mounted() {
    document.querySelector('#home').classList.add('shop-accent');
  }
})

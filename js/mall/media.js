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
        link: "https://www.redbox.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-redbox-rnetwork.jpg",
        alt: "Nike - rNetwork",
        caption: "With 6 billion billion+ rentals to date, Redbox is America's leading destination for affordable new-release movies and entertainment with more ways to watch than any other home entertainment provider",
        tcr: "1.6%–3.2%"
      },
      {
        link: "http://www.fatbraintoys.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-fatbraintoys-rnetwork.jpg",
        alt: "Fat Brain Toys - rNetwork",
        caption: "Fat Brain Toys&reg; is a retailer and developer of unique specialty toys, games, and gifts.",
        tcr: "4.8%"
      },
      {
        link: "http://www.abcmouse.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-abcmouse-rnetwork.jpg",
        alt: "ABCMouse - rNetwork",
        caption: "ABCmouse.com, Adventure Academy, and ReadingIQ were all created with the purpose of helping children everywhere build a strong foundation for academic success and to foster a lifelong love of learning.",
        tcr: "up to 4%"
      },
      {
        link: "http://www.gamersgate.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-gamersgate-rnetwork.jpg",
        alt: "gamersgate - rNetwork",
        caption: "GamersGate is the world’s largest online store for PC and Mac games, (4500+ games). It is online digital digital distribution platform creating easily accessible gaming experiences for gamers worldwide&#8212;anytime, anywhere.",
        tcr: "4.0%"
      },
      {
        link: "http://www.kinguin.net/",
        img: "https://rnetwork.imfast.io/production/images/shop-kinguin-rnetwork.jpg",
        alt: "Kinguin - rNetwork",
        caption: "Kinguin is an online, global marketplace for video game keys - Steam, Origin, Uplay, Battle.net, Xbox, PSN cd-keys and much more!",
        tcr: "2.0%–4.0%"
      },
      {
        link: "https://www.gamefly.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-gamefly-rnetwork.jpg",
        alt: "Gamefly - rNetwork",
        caption: "GameFly is the leading online video game rental service in the United States. We deliver the widest selection and availability of games for all the major consoles.",
        tcr: "8.0%"
      },
      {
        link: "https://www.eneba.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-eneba-rnetwork.jpg",
        alt: "Eneba - rNetwork",
        caption: "With a huge selection of titles at the best price, Eneba quickly became a go-to place to find the best gaming deals, boasting over 2 million monthly users.",
        tcr: "4.0%"
      },
      {
        link: "http://www.discountschoolsupply.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-discountschoolsupply-rnetwork.jpg",
        alt: "Discount School Supply - rNetwork",
        caption: "Discount School Supply offers the best variety of school supplies, arts and crafts supplies, teaching resources, educational based toys and games and learning tools for children, parents and teachers.",
        tcr: "0.80%"
      },
      {
        link: "http://www.crayola.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-crayola-rnetwork.jpg",
        alt: "Crayola - rNetwork",
        caption: "Crayola.com offers a huge range of Crayola&reg; brand name items, including crayons, markers, Silly Putty&reg; Color Wonder, Creative Makers, and even Crayola&reg; Custom 64 Boxes.",
        tcr: "7.20%"
      },
      {
        link: "https://www.booksamillion.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-booksamillion-rnetwork.jpg",
        alt: "Books-a-Million - rNetwork",
        caption: "Books-A-Million is the second largest bookseller in the United States and a premium collectible toy and gift retailer.",
        tcr: "2.40%"
      },
    ],
    country: [
      {
        link: "http://www.mmoga.co.uk/?cjukpid=1",
        img: "https://rnetwork.imfast.io/production/images/shop-mmoga-rnetwork.jpg",
        alt: "MMOGA - rNetwork",
        caption: "MMOGA was one of the first professional mediators of game services on the European market. By now, we have more than 12 years of experience and can pass that on to our customers.",
        tcr: "8%–12%"
      },
      {
        link: "https://www.chapters.indigo.ca/en-ca/",
        img: "https://rnetwork.imfast.io/production/images/shop-indigo-rnetwork.jpg",
        alt: "Indigo - rNetwork",
        caption: "Chapters.Indigo.ca is the leading Canadian destination for online shoppers seeking books, toys, gifts, entertainment, and electronics.",
        tcr: "1.6%–8%"
      },
    ]
  }),
  mounted() {
    document.querySelector('#electronics').classList.add('shop-accent');
  }
})

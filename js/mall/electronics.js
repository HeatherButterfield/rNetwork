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
        link: "https://www.outdoortechnology.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-outdoortech-rnetwork.jpg",
        alt: "Outdoor Tech - rNetwork",
        caption: "The evolution of Outdoor Tech has been shaped by this constant push and pull, to stay connected but not tethered. Our goal from the beginning has been to address the ever growing issue of blending a modern lifestyle in the age of mobile technology with the drive to be outdoors.",
        tcr: "8.0%"
      },
      {
        link: "https://www.iolo.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-iolo-rnetwork.jpg",
        alt: "iolo - rNetwork",
        caption: "iolo is widely recognized by both consumers and industry experts as a worldwide leader in the system utility software market.",
        tcr: "8.0%–48%"
      },
      {
        link: "https://www.withings.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-withings-rnetwork.jpg",
        alt: "withings - rNetwork",
        caption: "Withings is forging the digital health frontier with an ecosystem of award-winning products and services including activity trackers, scales, thermometers, blood pressure monitors, and sleep captors.",
        tcr: "5.6%"
      },
      {
        link: "http://www.tigerdirect.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-tigerdirect-rnetwork.jpg",
        alt: "Tiger Direct - rNetwork",
        caption: "Tiger Direct is one of the industry leaders in computer parts and accessories. Customers want to buy products from a name they trust.",
        tcr: "0.8%–2.4%"
      },
      {
        link: "https://www.semrush.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-semrush-rnetwork.jpg",
        alt: "SEMrush - rNetwork",
        caption: "SEMrush is an online visibility management and content marketing SaaS platform that enables businesses to optimize their online presence across all key channels.",
        tcr: "up to $80 USD"
      },
      {
        link: "https://www.itead.cc/",
        img: "https://rnetwork.imfast.io/production/images/shop-itead-rnetwork.jpg",
        alt: "ITEAD - rNetwork",
        caption: "ITEAD specializes in developing and manufacturing hardware and smart home products, providing a wide variety of smart products including SONOFF brand for Wi-Fi DIY smart switches, Wi-Fi smart plugs, etc.",
        tcr: "6.4%–9.6%"
      },
      {
        link: "https://us-store.acer.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-acer-rnetwork.jpg",
        alt: "Acer - rNetwork",
        caption: "Since Acer's inception in 1976, our common goal has always been contributing to society. We believe that the more access people have to technology, the better. This is our reason for being.",
        tcr: "3.2%"
      },
      {
        link: "https://sucuri.net/",
        img: "https://rnetwork.imfast.io/production/images/shop-sucuri-rnetwork.jpg",
        alt: "Sucuri - rNetwork",
        caption: "The one constant in an evolving security landscape, Sucuri was established in 2008 to build the most effective and affordable cloud-based technology and services for website security and performance.",
        tcr: "$24–$240"
      },
      {
        link: "http://gopro.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-gopro-rnetwork.jpg",
        alt: "GoPro - rNetwork",
        caption: "From cameras and drones to apps and accessories, GoPro frees people to celebrate the moment, inspiring others to do the same. Capture life as you live it, share the experience, and pass on the stoke.",
        tcr: "4%"
      },
      {
        link: "https://www.zagg.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-invisibleshield-rnetwork.jpg",
        alt: "zagg - rNetwork",
        caption: "ZAGG is a market leader in innovative mobile device accessories that protect, personalize, and enhance the mobile experience.",
        tcr: "4.8%"
      },
      {
        link: "http://www.jabra.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-jabra-rnetwork.jpg",
        alt: "jabra - rNetwork",
        caption: "Jabra is a global producer of innovative headset and speakerphone solutions. We enable effortless communication for mobile users, office-based and contact center employees internationally.",
        tcr: "1.6%"
      },
      {
        link: "http://www.touchofmodern.com/",
        img: "https://rnetwork.imfast.io/production/images/shop-touchofmodern-rnetwork.jpg",
        alt: "Touch of Modern - rNetwork",
        caption: "Touch of Modern specializes in bringing high quality, ultra-modern design to customers at affordable prices.",
        tcr: "2%–8%"
      },
    ],
  }),
  mounted() {
    document.querySelector('#electronics').classList.add('shop-accent');
  }
})

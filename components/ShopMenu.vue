<template>
  <div id="shop-menu-wrapper" class="padding-sides">
    <!--category list (pan-x scroll behavior for devices)-->
    <ul id="shop-category-list" class="shop-menu flex-start">
      <!--<li><a href="#?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-coming-rnetwork.png" alt="coming soon - rNetwork"/></span>Coming Soon</a></li>-->

      <!--<li><a href="#?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-sale-rnetwork.png" alt="shop sale - rNetwork"/></span>SALE</a></li>-->

      <li><a data-translate="true" href="/r/globalmall?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="home"><img src="https://rnetwork.imfast.io/production/images/shop-home-rnetwork.png" alt="rGlobal Mall - rNetwork"/></span>Home</a></li>

      <li><a data-translate="true" href="/r/globalmall/apparel?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="apparel"><img src="https://rnetwork.imfast.io/production/images/shop-apparel-rnetwork.png" alt="shop apparel - rNetwork"/></span>Apparel & Accessories</a></li>

      <li><a data-translate="true" href="/r/globalmall/beauty?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="beauty"><img src="https://rnetwork.imfast.io/production/images/shop-beauty-rnetwork.png" alt="shop beauty - rNetwork"/></span>Beauty & Cosmetics</a></li>

      <li><a data-translate="true" href="/r/globalmall/media?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="books"><img src="https://rnetwork.imfast.io/production/images/shop-books-rnetwork.png" alt="shop books - rNetwork"/></span>Books & Media</a></li>

      <li><a data-translate="true" href="/r/globalmall/electronics?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="electronics"><img src="https://rnetwork.imfast.io/production/images/shop-computer-rnetwork.png" alt="shop computers - rNetwork"/></span>Computers & Electronics</a></li>

      <li><a data-translate="true" href="/r/globalmall/finance?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span id="finance"><img src="https://rnetwork.imfast.io/production/images/shop-finance-rnetwork.png" alt="shop finance - rNetwork"/></span>Finance</a></li>

      <li><a data-translate="true" href="/r/globalmall/gifts?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-gifts-rnetwork.png" alt="shop gifts - rNetwork"/></span>Gifts</a></li>

      <li><a data-translate="true" href="/r/globalmall/wellness?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-health-rnetwork.png" alt="shop health - rNetwork"/></span>Health & Wellness</a></li>

      <li><a data-translate="true" href="/r/globalmall/home?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-garden-rnetwork.png" alt="shop garden - rNetwork"/></span>Home & Garden</a></li>

      <li><a data-translate="true" href="/r/globalmall/office?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-office-rnetwork.png" alt="shop office - rNetwork"/></span>Office</a></li>

      <li><a data-translate="true" href="/r/globalmall/pets?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-pet-rnetwork.png" alt="shop pets - rNetwork"/></span>Pets</a></li>

      <li><a data-translate="true" href="/r/globalmall/travel?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-travel-rnetwork.png" alt="shop travel - rNetwork"/></span>Travel & Entertainment</a></li>

      <li><a data-translate="true" href="/r/globalmall/marketplaces?appuserid=@Model.AppUser.ID&appusertype=@Model.AppUser.TypeNum"><span><img src="https://rnetwork.imfast.io/production/images/shop-mall-rnetwork.png" alt="shop mall - rNetwork"/></span>Mega Stores</a></li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: 'Header',
  data: () => ({

  }),
}
</script>

<style>

</style>

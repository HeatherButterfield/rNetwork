<template>
  <figure class="shop-card">
      <a :href="link" target="_blank">
          <!--graphic-->
          <img :src="img" :alt="alt"/>

          <!--caption-->
          <figcaption data-translate="true">
              {{caption}}

              <!--shop now-->
              <div data-translate="true" class="shop-button">Shop Now</div>
          </figcaption>

          <!--total commissions range - tcr-->
          <div class="shop-card-tcr" data-translate="true">TCR {{tcr}}</div>
      </a>
  </figure>
</template>

<script>
module.exports = {
  name: 'Header',
  props: ["link", "img", "alt", "caption", "tcr"],
  data: () => ({
    data: data
  }),
}
</script>

<style>

</style>

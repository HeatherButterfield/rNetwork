<template>
  <li class="box account-cards relative">
    <!--content block-->
    <section>
      <!--first line-->
      <span class="account-cards-head flex-spacebetween flex-align-center">
        <span class="name">{{fname}} {{lname}}</span>
        <span class="status" :class="status === 'Active' ? 'status-active' : 'status-inactive'">{{status}}</span>
      </span>

      <!--details-->
      Type: {{type}}<br>
      Tier: {{tier}}<br>
      Email: <a :href="'mailto:' + email">{{email}}</a><br>
      Phone: <a :href="'tel:' + phone">{{phone}}</a><br>
      Country: {{country}}
    </section>
  </li>
</template>

<script>
module.exports = {
  name: 'Header',
  props: ["token", "id", "fname", "lname", "status", "type", "tier", "email", "phone", "country"],
  data: () => ({
    data: data
  }),
}
</script>

<style>

</style>

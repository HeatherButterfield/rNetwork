<template>
  <div>
    <!--back office panel wrapper-->
    <div id="bo-panel-wrapper" v-if="data.appUserIsSignedIn">
        <!--opening trigger - zindex 81-->
        <div id="bo-panel-trigger">
            <a href="#bo-panel-1"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/back-office-rnetwork.png" alt="back office - rNetwork"/></a>
        </div>

        <!--panel 1 - zindex 80-->
        <div id="bo-panel-1" class="bo-panel bo-panel-1-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <!--profile box-->
            <div id="bo-profile-box">
                <!--avatar-->
                <div id="bo-avatar"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/avatar-2-rnetwork.png" alt="avatar - rNetwork"/></div>

                <!--id-->
                <p id="bo-info" class="word-break" v-if="data.appUser != null">
                    <span id="name">{{data.appUser.firstName}} {{data.appUser.lastName}}</span>
                    <span id="id">ID: {{data.appUser.id}}</span>
                    <span data-translate="true" id="type">{{data.appUser.type}}</span>
                    <span data-translate="true" id="status">{{data.appUser.status}}</span>
                </p>
            </div>

            <!--panel 1 menu-->
            <ul class="bo-panel-menu box">
                <!--message center-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/message-rnetwork.png" alt="message center - rNetwork"/></span><span data-translate="true">Message Center</span> <span data-translate="true" id="bo-message-notification">117</span></a></li>

                <!--dashboard-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/dashboard-rnetwork.png" alt="dashboard - rNetwork"/></span><span data-translate="true">Dashboard</span></a></li>

                <!--network manager-->
                <li><a href="#bo-panel-2"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/network-manager-rnetwork.png" alt="network manager - rNetwork"/></span><span data-translate="true">Network Manager</span></a></li>

                <!--financial hub-->
                <li><a href="#bo-panel-3"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/financial-hub-rnetwork.png" alt="financial hub - rNetwork"/></span><span data-translate="true">Financial Hub</span></a></li>

                <!--retail hub-->
                <li><a href="#bo-panel-4"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/retail-hub-rnetwork.png" alt="retail hub - rNetwork"/></span><span data-translate="true">Retail Hub</span></a></li>

                <!--concierge hub-->
                <li><a href="#bo-panel-5"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/concierge-hub-rnetwork.png" alt="concierge hub - rNetwork"/></span><span data-translate="true">Concierge Hub</span></a></li>

                <!--admin hub-->
                <li><a href="#bo-panel-6"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/admin-hub-rnetwork.png" alt="admin hub - rNetwork"/></span><span data-translate="true">Administrative Hub</span></a></li>
            </ul>
        </div>

        <!--panel 2 - zindex 80-->
        <div id="bo-panel-2" class="bo-panel bo-panel-2-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <h4 data-translate="true">Network Manager</h4>

            <!--panel 2 menu-->
            <ul class="bo-panel-menu box">
                <!--your account-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/account-rnetwork.png" alt="account - rNetwork"/></span><span data-translate="true">Account</span></a></li>

                <!--enroll a member-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/enroll-member-rnetwork.png" alt="enroll a member - rNetwork"/></span><span data-translate="true">Enroll a Member</span></a></li>

                <!--PEN-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/PEN-rnetwork.png" alt="PEN - rNetwork"/></span><span data-translate="true">PEN</span></a></li>

                <!--TBS-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/TBS-rnetwork.png" alt="TBS - rNetwork"/></span><span data-translate="true">TBS</span></a></li>

                <!--resource center-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/resource-center-rnetwork.png" alt="resource center - rNetwork"/></span><span data-translate="true">Resource Center</span></a></li>

                <!--go back-->
                <li class="back-to-main"><a href="#bo-panel-1"><span><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/return-rnetwork.png" alt="return to main menu - rNetwork"/></span></a></li>
            </ul>
        </div>

        <!--panel 3 - zindex 80-->
        <div id="bo-panel-3" class="bo-panel bo-panel-2-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <h4 data-translate="true">Financial Hub</h4>

            <!--panel 2 menu-->
            <ul class="bo-panel-menu box">
                <!--rMoney-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rMoney-rnetwork.png" alt="rMoney - rNetwork"/></span><span data-translate="true">rMoney</span></a></li>

                <!--rPay-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rPay-network.png" alt="rPay - rNetwork"/></span><span data-translate="true">rPay</span></a></li>

                <!--rAlert-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rAlert-rnetwork.png" alt="rAlert - rNetwork"/></span><span data-translate="true">rAlert</span></a></li>

                <!--rBank-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rBank-rnetwork.png" alt="rBank - rNetwork"/></span><span data-translate="true">rBank</span></a></li>

                <!--go back-->
                <li class="back-to-main"><a href="#bo-panel-1"><span><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/return-rnetwork.png" alt="return to main menu - rNetwork"/></span></a></li>
            </ul>
        </div>

        <!--panel 4 - zindex 80-->
        <div id="bo-panel-4" class="bo-panel bo-panel-2-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <h4 data-translate="true">Retail Hub</h4>

            <!--panel 2 menu-->
            <ul class="bo-panel-menu box">
                <!--rNetwork Partner Brands-->
                <li><a href="/2020v1/bo/shop/?appuserid=10000000&appusertype=1"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rShopping-rnetwork.png" alt="rNetwork Partner Brands - rNetwork"/></span><span data-translate="true">rNetwork Partner Brands</span></a></li>

                <!--rTravel-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rTravel-rnetwork.png" alt="rTravel - rNetwork"/></span><span data-translate="true">rTravel</span></a></li>

                <!--rPerks-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rPerks-rnetwork.png" alt="rPerks - rNetwork"/></span><span data-translate="true">rPerks</span></a></li>

                <!--rBrands-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rTravel-rnetwork.png" alt="rBrands - rNetwork"/></span><span data-translate="true">rTravel</span></a></li>

                <!--go back-->
                <li class="back-to-main"><a href="#bo-panel-1"><span><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/return-rnetwork.png" alt="return to main menu - rNetwork"/></span></a></li>
            </ul>
        </div>

        <!--panel 5 - zindex 80-->
        <div id="bo-panel-5" class="bo-panel bo-panel-2-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <h4 data-translate="true">Concierge Hub</h4>

            <!--panel 2 menu-->
            <ul class="bo-panel-menu box">
                <!--rAuto-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rAuto-rnetwork.png" alt="rAuto - rNetwork"/></span><span data-translate="true">rAuto</span></a></li>

                <!--rMobile-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rMobile-rnetwork.png" alt="rMobile - rNetwork"/></span><span data-translate="true">rMobile</span></a></li>

                <!--rMortgage-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rMortgage-rnetwork.png" alt="rMortgage - rNetwork"/></span><span data-translate="true">rMortgage</span></a></li>

                <!--rMeds-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rMeds-rnetwork.png" alt="rMeds - rNetwork"/></span><span data-translate="true">rMeds</span></a></li>

                <!--rPetMeds-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rPetMeds-rnetwork.png" alt="rPetMeds - rNetwork"/></span><span data-translate="true">rPetMeds</span></a></li>

                <!--rSecurity-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/rSecurity-rnetwork.png" alt="rSecurity - rNetwork"/></span><span data-translate="true">Security</span></a></li>

                <!--go back-->
                <li class="back-to-main"><a href="#bo-panel-1"><span><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/return-rnetwork.png" alt="return to main menu - rNetwork"/></span></a></li>
            </ul>
        </div>

        <!--panel 6 - zindex 80-->
        <div id="bo-panel-6" class="bo-panel bo-panel-2-bg box box-shadow relative">
            <!--closing trigger - zindex 80-->
            <div class="bo-panel-close-trigger">
                <a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close panel - rNetwork" /></a>
            </div>

            <h4 data-translate="true">Administrative Hub</h4>

            <!--panel 2 menu-->
            <ul class="bo-panel-menu box">
                <!--User Accounts-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/user-accounts-rnetwork.png" alt="User Accounts - rNetwork"/></span><span data-translate="true">User Accounts</span></a></li>

                <!--10 in the PEN-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/10-pen-rnetwork.png" alt="10 in the PEN - rNetwork"/></span><span data-translate="true">10 in the PEN</span></a></li>

                <!--Daily Signups-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/daily-signups-rnetwork.png" alt="Daily Signups - rNetwork"/></span><span data-translate="true">Daily Signups</span></a></li>

                <!--View Orders-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/view-orders-rnetwork.png" alt="View Orders - rNetwork"/></span><span data-translate="true">View Orders</span></a></li>

                <!--Countries-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/countries-rnetwork.png" alt="Countries - rNetwork"/></span><span data-translate="true">Countries</span></a></li>

                <!--Comm Pool-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/commpool-rnetwork.png" alt="Comm Pool - rNetwork"/></span><span data-translate="true">Comm Pool</span></a></li>

                <!--Reports-->
                <li><a href="#"><span class="bo-panel-icon"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/reports-rnetwork.png" alt="Reports - rNetwork"/></span><span data-translate="true">Reports</span></a></li>

                <!--go back-->
                <li class="back-to-main"><a href="#bo-panel-1"><span><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/return-rnetwork.png" alt="return to main menu - rNetwork"/></span></a></li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'BackOfficePanel',
  data: () => ({
    data: data
  }),
  mounted() {
    if(this.data.appUser != null) {
      if (this.data.appUser.status === 'Active') {
        document.querySelector('#status').classList.add('status-active');
      }
      else if (this.data.appUser.status === 'Inactive') {
        document.querySelector('#status').classList.add('status-inactive');
      }
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <!--header-->
    <header class="flex-align-center box">
        <!--trifold-->
        <div id="trifold" class="nav-icon"><a href="#nav-menu"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/trifold_4x.png" alt="trifold menu" /></a></div>

        <!--mobile menu-->
        <nav>
            <!--mobile menu - zindex 200-->
            <div id="nav-menu" class="box hover-underscore">
                <!--close button-->
                <div id="close-nav-menu"><a href="#"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/close-panel-rnetwork.png" alt="close" /></a></div>

                <!--menu - getting started-->
                <ul id="nav-1">
                    <li><a href="/opportunity" data-translate="true"><strong>Opportunity</strong></a></li>
                    <li><a href="/products" data-translate="true">Products & Services</a></li>
                    <li><a href="/requirement" data-translate="true"></a>Join Now</li>
                    <li><a href="/account/login" data-translate="true"></a>Login</li>
                    <h6 class="col-span-all" data-translate="true">Getting Started</h6>

                    <!-- <li><a href="#">Opportunity</a></li>
                    <li><a href="#">Networking Power</a></li>
                    <li><a href="#">Building Your Team</a></li>
                    <li><a href="#">Your Earning Potential</a></li>
                    <li><a href="#">Our Products</a></li>
                    <li><a href="#">Our Commitment</a></li> -->
                    <li><a href="/portal_dashboard.html" >Account</a></li>
                    <!--<li><a href="#">Join Now</a></li>-->
                </ul>

                <!--menu - additional menu-->
                <ul id="nav-2">
                    <li><a href="#" data-translate="true">About Us</a></li>
                    <li><a href="#" data-translate="true">News</a></li>
                    <li><a href="#" data-translate="true">Swag</a></li>
                    <li><a href="#" data-translate="true">Support</a></li>
                    <li><a href="#" data-translate="true">Field Guide</a></li>
                    <li><a href="#" data-translate="true">Media</a></li>
                </ul>

                <!--sign in-->
                <div id="nav-menu-login" v-if="!data.appUserIsSignedIn"><a href="#login-form" >Sign In &#10140;</a></div>
            </div>

            <!--overlay-->
            <div id="nav-menu-overlay"></div>
        </nav>

        <!--logo - use country initial to indicate access country-->
        <div class="logo"><a href="/home"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/logo_rnetwork_1.png" alt="rNetwork logo" /></a><a href="/2020v1"><span class="country-flag">US</span></a></div>

        <!--login/logout-->
        <div id="login" class="nav-icon"><a href="#login-form"><img src="https://rnetwork.s3-us-west-1.amazonaws.com/images/login_4x.png" alt="login" /></a></div>
    </header>
  </div>
</template>

<script>
module.exports = {
  name: 'Header',
  data: () => ({
    data: data
  }),
}
</script>

<style>

</style>

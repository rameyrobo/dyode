<template>
<div class="footer black-bg desktop secondary container">
 <row class="footer-desktop-layout">
        <column :xs="12" :md="3">
        <h2>Customer Service</h2>
        <ul class="menu-items">
            <li class="menu-item white">Accessibility</li>
            <li class="menu-item white">Contact Us</li>
            <li class="menu-item white">Return Policy</li>
            <li class="menu-item white">FAQ</li>
            <li class="menu-item white">Gift Certificates</li>
            <li class="menu-item white">Wishlist</li>
        </ul>
        </column>
        <column :xs="12" :md="3">
        <h2>Company</h2>
        <ul class="menu-items">
            <li class="menu-item white">About Us</li>
            <li class="menu-item white">Careers</li>
            <li class="menu-item white">Press</li>
            <li class="menu-item white">Affiliates</li>
        </ul>
        </column>
        <column :xs="12" :md="3">
        </column>
        <column :xs="12" :md="3">
        <h2>Follow Us</h2>
        <div class="social-media-icons">
        <a href="#"><img class="social-media-icons" src="../assets/images/compressed/fb.svg"></a>
        <a href="#"><img class="social-media-icons mid" src="../assets/images/compressed/ig.svg"></a>
        <a href="#"><img class="social-media-icons" src="../assets/images/compressed/twitter.svg"></a>
        </div>
        </column>
    </row>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';

    .footer.black-bg.desktop.secondary.container {
        display: none;
    }
@media screen and (min-width:$layout-breakpoint-medium) {

 .footer.black-bg.desktop.secondary.container {
     display: block !important;
 }
.footer {
    padding: 0 2rem 2rem !important;
}

h2 {
    font-family: "Pacifico", sans-serif !important;
    color: #fff !important;
    padding: 0;
    margin-block-end: 0;
    text-align: left;
    } 
ul.menu-items {
    padding: 0;
}
.menu-item {
    font-family: $secondary-font-family !important;
    list-style: none;
    text-align: left;
    padding: .75rem 0;
}
.social-media-icons {
    float:left;
}
.social-link {
  padding: 1rem 1rem 0;
}
.mid {
  margin: 0 45px;
  }
.social-media-icons {
  margin-top:15px;
}
}
</style>
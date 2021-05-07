<template>
<div class="footer black-bg mobile secondary container">
  <row class="footer-mobile-layout">
    <column>
  <vsa-list init-active="true" :auto-collapse="false">
    <vsa-item>
      <vsa-heading>
        <h2>Customer Service</h2>
      </vsa-heading>
<vsa-icon>
      <span class="open white" style="font-size:1.2rem; margin-top: 20px">+</span>
      <span class="close white" style="font-size:1.2rem; margin-top: 20px">-</span>
</vsa-icon>
      <vsa-content>
        <ul class="menu-items">
            <li class="menu-item">Accessibility</li>
            <li class="menu-item">Contact Us</li>
            <li class="menu-item">Return Policy</li>
            <li class="menu-item">FAQ</li>
            <li class="menu-item">Gift Certificates</li>
            <li class="menu-item">Wishlist</li>
        </ul>
      </vsa-content>
    </vsa-item>
    <vsa-item>
      <vsa-heading>
        <h2>Company</h2>
      </vsa-heading>
<vsa-icon>
      <span class="open white" style="font-size:1.2rem; margin-top: 20px">+</span>
      <span class="close white" style="font-size:1.2rem; margin-top: 20px">-</span>
</vsa-icon>
      <vsa-content>
        <ul class="menu-items">
            <li class="menu-item">About Us</li>
            <li class="menu-item">Careers</li>
            <li class="menu-item">Press</li>
            <li class="menu-item">Affiliates</li>
        </ul>
      </vsa-content>
    </vsa-item>
  </vsa-list>
  <div class="social-link black-bg white">
<h2>Follus Us</h2>
<a href="#"><img class="social-media-icons" src="../assets/images/compressed/fb.svg"></a>
<a href="#"><img class="social-media-icons mid" src="../assets/images/compressed/ig.svg"></a>
<a href="#"><img class="social-media-icons" src="../assets/images/compressed/twitter.svg"></a>
  </div>
    </column >
    </row>
  </div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
.footer {
  padding: 0 1rem 3rem !important;
}
.vsa-item {
  &--is-active {
    .vsa-item__trigger__icon {
      .open {
        display: none;
      }

      .close {
        display: block;
      }
    }
  }
  &__trigger__icon {
    .open {
      display: block;
    }

    .close {
      display: none;
    }
  }
}
.vsa-list {
    --vsa-max-width: 100%;
    --vsa-min-width: 100%;
    --vsa-heading-padding: 1rem 1rem 0;
    --vsa-text-color: #fff;
    --vsa-highlight-color: #000;
    --vsa-bg-color: #000;
    --vsa-border-color: rgba(0,0,0,0.2);
    --vsa-border-width: 1px;
    --vsa-border-style: solid;
    --vsa-border: var(--vsa-border-width) var(--vsa-border-style) var(--vsa-border-color);
    --vsa-content-padding: 0 1rem 0;
    --vsa-default-icon-size: 1;
    display: block;
    max-width: var(--vsa-max-width);
    min-width: var(--vsa-min-width);
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    border: var(--vsa-border);
    color: #fff;
    background-color: var(--vsa-bg-color);
    font-family: $primary-font-family;
}
.vsa-item__trigger, .vsa-item__trigger:focus, .vsa-item__trigger:hover {
    padding: 1rem 1rem 0 !important;
}
.vsa-item__trigger:focus, .vsa-item__trigger:hover {
    outline: none;
    background-color: $color-white !important;
    color: $color-white !important;
}
h2 {
    font-family: "Pacifico", sans-serif !important;
    color: #fff !important;
    padding: 0;
    margin-block-end: 0;
    } 
.vsa-item__trigger__icon .open  {
    color: #fff !important;
}
.vsa-item__content {
    margin: 0;
    padding: 0 !important;
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
.social-link {
  text-align: left;
  padding: 1rem 1rem 0;
}
.social-media-icons {
  margin-top:15px;
}
.mid {
  margin: 0 45px;
  }
@media (min-width: $layout-breakpoint-medium) {
.footer.black-bg.mobile.secondary.container {
        display: none !important;
}
} 
</style>
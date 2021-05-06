<template>
<div class="newsletter">
<section class="block-section-mobile">
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title">Sign Up and Stay Connected</h2>
     </column>
    </row>
    <row :gutter="12">
        <column :xs="12" :md="6"> 
     <p class="newsletter-text">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first ot know when new stuff drops!</p>
        </column>
        <column :xs="12" :md="6">
    <form action="/action_page.php">
  <input type="text" id="newsletter" name="newsletter">
  <input type="submit" value="submit">    
  </form>    
  </column>
    </row>
</section>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';

.newsletter {
    position: absolute;
    background: $main-color;
}
.block-section-mobile {
    .header-title, .newsletter-text {
            color: $color-white;
            margin-bottom: 0;
    }
}
h4.subheader {
    color: $main-color;
    margin-top:0;
}
@media screen and (max-width:$layout-breakpoint-medium) {
    .full-hero-mobile {
        display: block;
        position: relative;
    }
}
</style>
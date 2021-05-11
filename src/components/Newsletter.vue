<template>
<div class="newsletter main-color-bg secondary container">
<section class="block-section-mobile">
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title newsletter white"><img class="subscribe-ico" src="../assets/images/compressed/subscribe.svg">Sign Up and Stay Connected</h2>
     </column>
    </row>
    <row :gutter="12">
        <column :xs="12" :lg="6"> 
     <p class="newsletter-text white">Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
        </column>
        <column :xs="12" :lg="6">
    <form class="newsletter-form" action="/action_page.php">
  <input type="email" id="newsletter" placeholder="Enter Your Email Address" name="newsletter">
  <input class="button transparent-bg" type="submit" value="subscribe">    
  </form>    
  </column>
    </row>
</section>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';

.header-title.section-title.newsletter {
    @include font-size(1.375rem);
}
img.subscribe-ico {
    width: 1.6rem;
    padding-right: 8px;
}
.block-section-mobile {
    .header-title, .newsletter-text.white {
        margin-bottom: 0;
        text-align:center;
    }
}
.newsletter-text.white {
    @include font-size(.875rem);
    margin-block-start: 0;
    padding-bottom: 1.75rem;
}
input#newsletter {
    display: none;
}
.button {
    border: 1px solid #fff;
}
@media screen and (min-width: $layout-breakpoint-medium) {
    .newsletter.main-color-bg.secondary.container {
    margin-top: 25px !important;
}
    .header-title.section-title.newsletter {
        @include font-size(2.75rem !important);
        padding: 3rem 0 0;
    }
    img.subscribe-ico {
        width: 3.2rem;
        padding-right: 13px;
    }
    .newsletter-text.white {
       @include font-size(1.375rem !important);
    }
}
@media screen and (min-width:$layout-breakpoint-large) {

    .full-hero-mobile {
        display: block;
        position: relative;
    }
    .newsletter-text.white {
        font-size:1rem;
        text-align: left !important;
    }
    input#newsletter {
        display: inline-block;
        height: 45px;
        position: relative;
        top: -2px;
        width: 66%;
        margin-right: 5px;
        background: #fff;
        padding: 0 20px;
        &::placeholder {
            color: #c6c6c6;
        }
    }
    .button {
        max-width: 33%;
        max-height: 45px;
    }
}
</style>
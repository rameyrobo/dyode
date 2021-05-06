<template>
<div class="full-carousel-mobile">
<section class="block-section-mobile">
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title">Shop New Arrivals</h2>
     <h4 class="subheader secondary-text">Our coolest new items are waiting for you!</h4>
     <button class="shop-now black-bg white">Shop Now</button>
     </column>
    </row>
</section>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';

.full-carousel-mobile {
    display: block;
    position: relative;
    background: #EFEFEF;
    padding: 2.5rem 0
}
.block-section-mobile {
    .header-title {
        &.section-title{
            color: $main-color;
            margin: 0;
        }
    }
}
h4.subheader {
    color: $main-color;
    margin-top:0;
}
@media screen and (min-width:$layout-breakpoint-medium) {
.full-carousel-mobile {
    display: none;
    }
}


</style>
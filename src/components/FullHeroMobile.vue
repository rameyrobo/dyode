<template>
<div class="full-hero-mobile">
<section class="block-section-mobile">
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title">Our Favorite Tees</h2>
     <h4 class="subheader secondary-text">Everyday tees you need!</h4>
     <button class="shop-now">Shop Now</button>
     </column>
    </row>
</section>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';

.full-hero-mobile {
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
.full-hero-mobile {
    display: none;
    }
}


</style>
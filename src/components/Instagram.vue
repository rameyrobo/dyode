<template>
<div class="instagram secondary container">
<h2 class="header-title section-title ig">Follow Us On Instagram</h2>
<section>
<row :gutter="0" :columns="30">
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-1.jpeg" class="social-img" /></column>
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-2.jpeg" class="social-img" /></column>
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-3.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg-mf" :xs="0" :sm="0" :md="6" :lg="6"><img src="../assets/images/compressed/Social-4.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg-mf" :xs="0" :sm="0" :md="6" :lg="6"><img src="../assets/images/compressed/Social-5.jpeg" class="social-img" /></column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
.header-title.section-title.ig {
    @include font-size(2.235rem);
}
.instagram, .instagram .container {
    overflow: hidden;
}
.social-img {
    max-width: 28.3vw;
}
.hiddenVGR-lg-mf {
    display: none;
}
@media screen and (min-width: $layout-breakpoint-medium) { 
    .header-title.section-title.ig{
        @include font-size(3.75rem);
    }
}
@media screen and (min-width: $layout-breakpoint-large) {
    .social-img {
        max-width: 18.5vw;
    }
    .hiddenVGR-lg-mf {
        display: inline;
    }
}
</style>

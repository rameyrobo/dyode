<template>
<div class="instagram secondary container">
<h2 class="header-title section-title ig">Follow Us On Instagram</h2>
<section class="insta">
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
.instagram.secondary-container {
    margin-bottom: 1.25rem !important;
}
.header-title.section-title.ig {
    @include font-size(2.235rem);
    padding: 2rem 0 0.5rem;
}
.instagram, .instagram .container {
    overflow: hidden;
}
.instagram.secondary.container .container {
    padding: 12px 0;
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
        padding: 3rem 0 1rem;
    }
    .insta .colVGR {
    margin-bottom: 10px !important; 
}
}
@media screen and (min-width: $layout-breakpoint-large) {
    .social-img {
        max-width: 17.6vw;
    }
   
}
</style>

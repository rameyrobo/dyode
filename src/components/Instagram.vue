<template>
<div class="instagram">
<h2 class="header-title section-title">Follow Us On Instagram</h2>
<section>
<row :gutter="0" :columns="30">
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-1.jpeg" class="social-img" /></column>
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-2.jpeg" class="social-img" /></column>
        <column :xs="10" :sm="10" :md="10" :lg="6"><img src="../assets/images/compressed/Social-3.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg" :xs="0" :sm="0" :md="6" :lg="6"><img src="../assets/images/compressed/Social-4.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg" :xs="0" :sm="0" :md="6" :lg="6"><img src="../assets/images/compressed/Social-5.jpeg" class="social-img" /></column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
.instagram, .instagram .container {
    overflow: hidden;
}
.social-img {
    max-width: 25vw;
}
@media screen and (min-width: 992px) {
.social-img {
    max-width: 15vw;
}
}
</style>

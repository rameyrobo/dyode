<template>
<div class="instagram">
<h2 class="header-title section-title">Follow Us On Instagram</h2>
<section>
<row :gutter="12" :columns="10">
        <column :xs="3" :sm="3" :md="3" :lg="2"><img src="../assets/images/compressed/Social-1.jpeg" class="social-img" /></column>
        <column :xs="3" :sm="3" :md="3" :lg="2"><img src="../assets/images/compressed/Social-2.jpeg" class="social-img" /></column>
        <column :xs="3" :sm="3" :md="3" :lg="2"><img src="../assets/images/compressed/Social-3.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg" :xs="0" :sm="0" :md="3" :lg="2"><img src="../assets/images/compressed/Social-4.jpeg" class="social-img" /></column>
        <column class="hiddenVGR-lg" :xs="0" :sm="0" :md="3" :lg="2"><img src="../assets/images/compressed/Social-5.jpeg" class="social-img" /></column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
header {

}
</style>

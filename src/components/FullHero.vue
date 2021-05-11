<template>
<div class="full-hero">
<section class="block-section-desktop">
    <row :gutter="12">
     <column :xs="12">
     <div class="right-aligned-content">
     <div class="title header-title">
     <h2 class="section-title section-title white">Our Favorite Tees</h2>
     </div>
     <div class="subtitle white">Everyday tees you need!</div>
     <div class="text"><button class="shop-now main-color-bg white">Shop Now</button></div>
     </div>
     </column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
.block-section-desktop {
    display: block;
  }
.right-aligned-content {
    display: none;
  }

.full-hero {
  background-image: url('../assets/images/compressed/CTA-Banner.jpeg');
  min-height: 46vw;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  padding: 0 80px;
  overflow-x: hidden;
}
.subtitle.white {
    padding: 40px 0 0;
    margin-bottom: 20px;
    font-size: 1.185rem;
}
@media screen and (min-width: $layout-breakpoint-medium) {
.right-aligned-content {
  display: block;
  top: -9vw;
  position: relative;
  float: right;
  left: 30px;
}
 .title, .subtitle, .text {
    text-align:left;
  }
  .title {
  margin-bottom: 20px;
  @include font-size(1.75rem);
  font-weight: bold;
  margin-bottom: 0;
  line-height: 1rem;
  }
.subtitle {
  margin-bottom: 20px;
  @include font-size(1.185rem);
  }
.text {
    max-width: 430px;
    line-height: 1.32;
  }
}
@media screen and (min-width: $layout-breakpoint-large) {
  .title {
  @include font-size(2.5rem);
  }
.subtitle {
  @include font-size(1.685rem);
  }
}
</style>

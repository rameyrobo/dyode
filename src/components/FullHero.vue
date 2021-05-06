<template>
<div class="full-hero">
<section class="block-section-desktop">
    <row :gutter="12">
     <column :xs="12">
     <h2 class="header-title section-title">Our Favorite Tees</h2>
     <h4 class="secondary-text">Everyday tees you need!</h4>
     <button>Shop Now</button>
     </column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
@import '../assets/styles/element-variables.scss';
@media screen and (max-width: 767px) {
.block-section-desktop {
    display: none;
  }
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
  background-color: transparent;
}
</style>

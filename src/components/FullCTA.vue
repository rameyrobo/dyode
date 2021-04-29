<template>
<div class="full-hero">
<section>
    <row :gutter="12">
     <column :xs="12">
     </column>
    </row>
</section>
</div>
</template>
<style lang="scss" scoped>
.full-hero {
  background-image: url('../assets/images/compressed/CTA-Banner.jpeg');
  min-height:800px;
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

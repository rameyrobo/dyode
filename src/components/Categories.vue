   <template>
   <div class="secondary container">
    <section class="categories">
    <row :gutter="12">
        <column :xs="6" :lg="4">
        <div class="card-top">
          <div class="card card-1">
          </div>
          <div class="card-title">
          Women's
          </div>
          </div>
        </column>
        <column :xs="6" :lg="4">
        <div class="card-top">
          <div class="card card-2">
          </div>
          <div class="card-title">
          Men's
          </div>
          </div>
        </column>
        <column :xs="12" :lg="4">
        <div class="card-bottom">
          <div class="card card-3">
          </div>
          <div class="card-title">
          Accessories
          </div>
          </div>
        </column>
    </row>
    </section>
    </div>
</template>
<style lang="scss">
@import '../assets/styles/element-variables.scss';
.secondary {
  margin: 2rem auto 10px;
}

// Card Styles

.card {
  width: 100%;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  background-color: transparent;
  height:100%;
  min-height: 203px;
  &.card-1 {
    background-image:url('../assets/images/compressed/Accessories-Image-1.jpeg')
  }
  &.card-2 {
    background-image:url('../assets/images/compressed/Accessories-Image-2.jpeg')
  }
  &.card-3 {
    background-image:url('../assets/images/compressed/Accessories-Image-3.jpeg')
  }
}
  .card-title {
    background:$main-color;
    font-family: 'Pacifico', cursive;
    color: $color-white;
    font-size: 2.5rem;
    min-height:42px;
  }
@media (min-width: $layout-breakpoint-medium) {
.card {
  min-height:400px;
  &.card-3{
    background-image:url('../assets/images/compressed/Accessories-Image-3-Full.jpeg');
    }
  }
}
</style>

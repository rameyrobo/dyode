   <template>
   <div class="category-boxes secondary container">
    <section class="categories">
    <row :gutter="12">
        <column :xs="6" :lg="4">
        <div onclick="alert('Go to Women\'s category')" class="card-top">
          <div class="card card-1">
          </div>
          <div class="card-title">
          Women's
          </div>
          </div>
        </column>
        <column :xs="6" :lg="4">
        <div onclick="alert('Go to Men\'s category')" class="card-top">
          <div class="card card-2">
          </div>
          <div class="card-title">
          Men's
          </div>
          </div>
        </column>
        <column :xs="12" :lg="4">
        <div onclick="alert('Go to Accessories category')" class="card-bottom">
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

.category-boxes.secondary.container {
    padding: .5rem .6275rem 0;
}
.secondary {
  margin: 2rem auto 10px;
}

// Card Styles

.card-top, .card-bottom {
  cursor: pointer;
}
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
  min-height: 51vw;
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
  @include font-size(1.5rem);
}
  .card-title {
    background:$main-color;
    font-family: 'Pacifico', cursive;
    color: $color-white;
    min-height:42px;
  }
@media (min-width: $layout-breakpoint-medium) {
.card {
  min-height:400px;
  &.card-3{
    background-image:url('../assets/images/compressed/Accessories-Image-3-Full.jpeg');
    background-position: center;
    }
  }
}
@media (min-width: $layout-breakpoint-large) {
  .card {
    min-height: 33vw;
  }
  .card-title {
    padding: 1rem 0;
  }
  .card-3 {
    background-position: top;
  }
  .card-title {
    @include font-size(2.5rem);
  }
}
@media (min-width: $layout-breakpoint-xtra-large) {

}
</style>

   <template>
   <div class="secondary">
    <section class="categories">
    <row :gutter="12">
        <column :xs="6" :md="4">
          <div class="card card-1">
          Women's
          </div>
        </column>
        <column :xs="6" :md="4">
          <div class="card card-2">
          Men's
          </div>
        </column>
        <column :xs="12" :md="4">
          <div class="card card-3">
          Accessories
          </div>
        </column>
    </row>
    </section>
    </div>
</template>
<style lang="scss">
// Card Styles

.card {
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  box-sizing: border-box;
  padding: 0 80px;
  background-color: transparent;
  min-height:600px;
  height:100%;

  &.card-1 {
    background-image:url('../assets/images/compressed/Accessories-Image-1.jpeg');
  }
  &.card-2 {
   background-image:url('../assets/images/compressed/Accessories-Image-2.jpeg');
  }
  &.card-3 {
    background-image:url('../assets/images/compressed/Accessories-Image-3.jpeg');
  }
}
</style>

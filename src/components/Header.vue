<template>
  <div id="nav" class="black-bg">
    <section class="promo-bar-menu white">
        <row>
            <column class="top-nav" :xs="12">
            <span class="promo-bar-menu-announcement">
                Free Shipping On All Orders!
            </span>
            </column>
        </row>
    </section>
     <section class="main-navbar-section main-color-bg">
        <row>
            <column :xs="5" :sm="5" :md="3" class="nav-menu-list logos">
             <v-app-bar-nav-icon @click.stop="drawer = !drawer"><img class="left meat" src="../assets/images/compressed/meat.svg"></v-app-bar-nav-icon>
            <img class="left logo" src="../assets/images/compressed/logo.svg">
            </column>
            <column :xs="2" :sm="2" :md="5" class="nav-menu-list menu-items white">
            <span class='menu-item'>Men's</span>
            <span class='menu-item'>Women's</span>
            <span class='menu-item'>Accessories</span>
            <span class='menu-item'>Sale!</span>
            </column>
            <column :xs="5" :sm="5" :md="4" class="nav-menu-list menu-icons white">
            <img class="menu-icon search" src="../assets/images/compressed/search-ico.svg">
            <img class="menu-icon account" src="../assets/images/compressed/account-ico.svg">
            <img class="menu-icon cart" src="../assets/images/compressed/cart-ico.svg">
            </column>
        </row>
        <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
      <v-list-item>

        <v-list-item-title></v-list-item-title>

        <v-btn
          icon
          @click.stop="drawer = !drawer"
        >
             <img src="../assets/images/compressed/Hamburger.svg">
        </v-btn>
      </v-list-item>

       <v-divider></v-divider>
       <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Tops</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><a class="top drawer link black" href="#">T-Shirts</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a class="top drawer link black" href="#">Short Sleeve</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a class="top drawer link black" href="#">Long Sleeve</a></v-list-item-title>
          </v-list-item>

        </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Bottoms</v-expansion-panel-header>
        <v-expansion-panel-content>
           <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><a class="top drawer link black" href="#">Shorts</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a class="top drawer link black" href="#">Pants</a></v-list-item-title>
          </v-list-item>

          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>

    </v-expansion-panels>
        </v-list>
         <template v-slot:append>
        <div class="pa-2 grey-bg">
              <v-row no-gutters class="mb-6">
                  <v-col>
            <img class="drawer-app-img" src="../assets/images/compressed/Social-1.jpeg">
                  </v-col>
                  <v-col>
                    <v-list-item-group
                        v-model="group"
                        active-class="deep-purple--text text--accent-4"
                    >
                        <v-list-item>
                            <v-list-item-title><a class="bottom drawer link black" href="#">Shop All</a></v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title><a class="bottom drawer link black" href="#">New Arrivals</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-title><a class="bottom drawer link black" href="#">Favorites</a></v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-title><a class="bottom drawer link black" href="#">Sale</a></v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                  </v-col>
              </v-row>
        </div>
      </template>
    </v-navigation-drawer>
    </section>
</div>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      panel: [0, 1],
      disabled: false,
      readonly: false,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
<style lang="scss">
@import '../assets/styles/element-variables.scss';

/* Promo Bar Menu */
.promo-bar-menu {
    text-align: center;
    max-height: 46px;
}

/* Main Navbar Section */
.main-navbar-section {
    .container {
        max-height:64px;
    }
}
#nav {
    .main-navbar-section {
     .colVGR {
    display: flex !important;
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    vertical-align: middle;
    .menu-item {
        display:none;
            } 
        }
    }
}
.top-nav {
    max-height: 50px;
}
.nav-menu-list {
    padding: 0;
}
#nav {
    .colVGR {
        .menu-icon, .left {
            margin: 0 .75rem;
            align-items: flex-end;
        }
    }
}
button.v-app-bar__nav-icon {
    top: -15px;
}
img.left.logo {
    width: 3.5rem;
}
.nav-menu-list.menu-icons {
    top: 6px;
}
.menu-icon {
    max-width: 25px;
}

/* Nav Drawer styles */
aside.v-navigation-drawer.v-navigation-drawer--absolute {
  height: calc(100vh - 42px) !important;
  top: 42px !important;
  width: 82% !important;
    .v-list-item__title {
      text-align: left;
        .drawer {
          &.link {
            @include font-size(1.125rem);
            text-decoration: none;
            font-weight: 500;
          }
        }
      } 
    }
.v-overlay--active {
  .v-overlay__scrim {
    opacity: 0.7 !important;
    background-color: #000 !important;
    border-color: #000 !important;
    }
}
.v-expansion-panel--active>.v-expansion-panel-header {
    min-height: 35px;
    max-height: 35px;
}
.v-list--dense .v-list-item, .v-list-item--dense, .v-navigation-drawer__append .v-list-item {
    min-height: 35px;
}
.v-expansion-panel-content__wrap {
    padding: 0 24px 0px 16px;
}
/* Panel Menu */    
.v-expansion-panel-header {
  @include font-size(1rem);
  font-weight: 300;
}
.v-expansion-panel:not(:first-child):after {
  border-top: none;
}
.v-expansion-panel:before {
  box-shadow: none;
}
/* Appended Bottom Menu */
.v-navigation-drawer__append {
    background-color: #EFEFEF;
    padding: 5%;
}
.drawer-app-img {
    max-width: 100%;
}
@media screen and (min-width:$layout-breakpoint-medium) {

/* Nav Menu tablet view up */
#nav {
    .colVGR {
        .menu-item, .menu-icon {
        flex:1;
        display: inline-block;
        }
    }
}
.nav-menu-list.menu-items {
    padding: 0rem 4rem;
    }

/* Remove mobile assets */
.meat, button.v-app-bar__nav-icon {
    display: none;
    }
}
</style>
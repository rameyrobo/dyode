<template>
  <div id="nav" class="black-bg">
    <section class="promo-bar-menu white">
        <row>
            <column class="top-nav" :xs="12">
            <span class="promo-bar-menu-announcement">
                Free Shipping On All Orders<span class="over"> Over $75</span>
            </span>
            </column>
        </row>
    </section>
     <section class="main-navbar-section main-color-bg" @mouseleave="mega = false">
        <row>
            <column :xs="5" :sm="5" :md="4" class="nav-menu-list logos">
             <v-app-bar-nav-icon @click.stop="drawer = !drawer"><img class="left meat" src="../assets/images/compressed/meat.svg"></v-app-bar-nav-icon>
            <img class="left logo" src="../assets/images/compressed/logo.svg">
            </column>
            <column :xs="2" :sm="2" :md="4" class="nav-menu-list menu-items white">
            <span class='menu-item'><a @mouseover="mega = true" class="menu-item-link">Men's</a></span>
            <span class='menu-item'><a @mouseover="mega = true" class="menu-item-link">Women's</a></span>
            <span class='menu-item'><a @mouseover="mega = true" class="menu-item-link">Accessories</a></span>
            <span class='menu-item'><a @mouseover="mega = true" class="menu-item-link">Sale!</a></span>
            </column>
            <column :xs="5" :sm="5" :md="4" class="nav-menu-list menu-icons white">
            <v-slide-x-transition>
              <div v-if="fullSearchPanel" class="full-width-search">
                <input type="email" id="header" placeholder="What are you searching for?" name="search">
                <input class="button black-bg go" type="submit" value="Go">
              </div>
            </v-slide-x-transition>
            <img @click="sub" class="menu-icon search mobile" src="../assets/images/compressed/search-ico.svg">
            <img @click="search" class="menu-icon search desktop" src="../assets/images/compressed/search-ico.svg">
            <img class="menu-icon account" src="../assets/images/compressed/account-ico.svg">
            <img class="menu-icon cart" src="../assets/images/compressed/cart-ico.svg">
            </column>
        </row>
        <!-- Megamenu -->
  <v-slide-y-transition>
    <section v-if="mega" class="main-navbar-section secondary-navbar megamenu">
        <row class="mega-row">
          <column :xs="6" class="mega-half mega-left">
            <template>
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
          </column>
          <column :xs="6" class="mega-half mega-right">
            <template>
              <div class="pa-2 grey-bg">
                <v-row no-gutters class="mb-6">
                  <v-col>
                    <v-list-item-group
                        v-model="group1"
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
                  <v-col>
                    <v-list-item-group
                        v-model="group3"
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
                  <v-col>
                    
                  </v-col>
              </v-row>
        </div>
      </template>
            </column>
        </row>
    </section>
  </v-slide-y-transition>
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
          v-model="drawerGroup1"
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
          v-model="drawerGroup2"
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
                        v-model="drawerGroup3"
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
  <v-slide-y-transition>
    <section v-if="searchPanel" class="main-navbar-section secondary-navbar">
        <row class="search-bar">
            <column :xs="12" class="search-bar input-forms">
            <input type="email" id="header" placeholder="What are you searching for?" name="search">
            <input class="button black-bg go" type="submit" value="Go">    
            </column>
        </row>
    </section>
  </v-slide-y-transition>  
    
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
      isActive: false,
      searchPanel: false,
      fullSearchPanel: false,
      mega: false,
    }),
    methods: {
      sub () {
        this.searchPanel = !this.searchPanel
      },
      search() {
        this.fullSearchPanel = !this.fullSearchPanel
      }
    },
    watch: {
      group () {
        this.isActive = !this.isActive;
      }
    }
    
  }
</script>
<style lang="scss">
@import '../assets/styles/element-variables.scss';

/* Promo Bar Menu */
.promo-bar-menu {
    text-align: center;
    max-height: 46px;
    text-transform: uppercase;
}
.over {
  display: none;
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
    &.logos {
      justify-content: left;
        }
      }
    }
}
#nav {
    .main-navbar-section {
     .colVGR {
       &.menu-icons {
         justify-content: flex-end;
       }
     }
    }
}
.menu-item {
        display:none;
        text-transform: uppercase;
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
img.menu-icon.search.desktop {
  display: none;
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
.full-width-search {
  display: none;
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
/* Drop Down Search Bar*/
.container.search-bar {
    padding: 7px 5px 8px;
}
/* Full Width Search Bar*/
.full-width-search {
    display: inline-block;
    position: relative;
    left: 50px;
    white-space: nowrap;
}
input#header {
    border: #000 solid 2px;
    width: 83%;
    height: 50px;
    margin-top: -4px;
    padding:4px 20px;
}

input#header:focus-visible {
    outline-color: $main-color;
}
.button.black-bg.go {
    height: 44.7px;
    position: relative;
    top: 1.7px;
}

@media screen and (min-width:$layout-breakpoint-medium) {

/* Nav Menu tablet view up */

.nav-menu-list.menu-items {
    padding: 0rem 4rem;
    }
}

section.main-navbar-section.secondary-navbar {
    margin: 0 25px;
    z-index: 2;
    position: absolute;
    background-color: #fff;
    width: calc(100% - 45px);
}
@media screen and (min-width:$layout-breakpoint-large) {
/* Promo Bar Menu */
.promo-bar-menu {
  min-height: 58px;
}
.top-nav.colVGR.colVGR-xs {
    padding-top: 6px;
}
.over {
  display: inline;
}
.main-navbar-section .container {
  height: 138px;
  max-height: unset;
}
img.left.logo {
    width: 5.825rem;
}
img.menu-icon.search.desktop {
  display: inline-block;
}
img.menu-icon.search.mobile {
  display: none;
}
  /* Remove mobile assets */
.meat, button.v-app-bar__nav-icon {
    display: none;
}
#nav {
    .main-navbar-section {
     .colVGR {
    align-items: center;
    .menu-item {
        flex: 1;
        display: inline-block !important;
        padding: 0 15px;
            } 
        }
    }
}
.menu-item-link:hover {
  text-decoration: underline;
}
#nav .colVGR .menu-item {
    
}
  section.main-navbar-section.main-color-bg input#header {
    border: #000 solid 2px;
    width: 19vw;
    height: 44px;
    margin-top: -4px;
    padding: 4px 20px;
    background: #fff;

}

/* Megamenu */
section.main-navbar-section.secondary-navbar.megamenu {
  margin: 0 20%;
  z-index: 2;
  position: absolute;
  background-color: #fff;
  width: calc(100% - 40%);
    .v-list-item {
      min-height: 28px;
       a {
         text-decoration: none;
       }
    }
}
.container.mega-row {
    height: 100%;
    padding: 0;
  }
.mega-left, .mega-right {
  height: 100%;
  padding: 25px !important;
  text-align: left;
}
  .mega-left {
    background: #EFEFEF;
  }
}
</style>
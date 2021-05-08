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
            <img class="left meat" src="../assets/images/compressed/meat.svg">
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
    </section>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/element-variables.scss';
.promo-bar-menu {
    text-align: center;
}
#nav {
    min-height: 100px;
     .colVGR {
    display: flex !important;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100px;
    vertical-align: middle;
    .menu-item {
        display:none;
        }
    }
}
.top-nav {
    max-height: 50px;
}
.nav-menu-list {
    margin-top: 25px;
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
.menu-icon {
    max-width: 25px;
}
@media screen and (min-width:$layout-breakpoint-medium) {
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
.meat {
    display: none;
    }
}
</style>
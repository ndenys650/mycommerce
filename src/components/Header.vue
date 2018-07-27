<template>
  <v-app dark>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.text">
          <v-list-tile-action>
            <v-btn flat icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-btn flat icon>
              <v-icon color="grey lighten-1">settings</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--lighten-1">Manage Account</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- Toolbar/Header -->
    <v-toolbar
      color="red darken-1"
      dense
      fixed
      clipped-left
      app
      extended
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn flat icon to="/">
        <v-icon medium>home</v-icon>
      </v-btn>
      <v-toolbar-title class="align-center hidden-xs-only">
        <span class="title">Denys</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          @click:append="() => {}"
          label="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
      <v-layout slot="extension" class="grey">
        <v-btn to="/store">StoreFront
          <v-icon right>store</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/cart">Cart
          <v-icon right>shopping_basket</v-icon>
        </v-btn>
      </v-layout>
    </v-toolbar>
    <!-- Main Content and Vue Router -->
    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-flex id="create">
            <v-speed-dial
              v-model="fab"
              :top="top"
              :bottom="bottom"
              :right="right"
              :left="left"
              :direction="direction"
              :open-on-hover="hover"
              :transition="transition"
            >
              <v-btn
                slot="activator"
                v-model="fab"
                color="blue darken-2"
                dark
                fab
              >
                <v-icon>account_circle</v-icon>
                <v-icon>close</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="green"
              >
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="indigo"
              >
                <v-icon>add</v-icon>
              </v-btn>
              <v-btn
                fab
                dark
                small
                color="red"
              >
                <v-icon>delete</v-icon>
              </v-btn>
            </v-speed-dial>
            <transition name="fade">
              <router-view/>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    drawer: false,
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'history', text: 'History' },
      { icon: 'favorite', text: 'Favorites' }
    ],
    direction: 'bottom',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: 'scale-transition'
  }),
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  }
}
</script>

<style>
div.v-toolbar__extension {
  padding: 0 0 !important;
}
.title {
  font-family: 'Great Vibes', cursive!important;
  font-size: 25px!important;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active {
  transition: all .8s ease;
}
.fade-leave-active {
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#create .v-speed-dial {
  position: absolute;
}
#create .v-btn--floating {
  position: -webkit-sticky;
  position: sticky;
}
</style>

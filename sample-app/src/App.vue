<template>
  <v-app dark>
    <v-toolbar app>
      <v-toolbar-side-icon v-on:click="openSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>My List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
      <SideNav/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'
export default {
  name: 'App',
  components:{
    SideNav
  },
  data () {
    return {
      //
    }
  },
  methods:{
    openSideMenu(){
      this.$store.dispatch('toggleSideMenu')
    }
  }
}
</script>

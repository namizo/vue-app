<template>
  <v-app dark>
    <v-toolbar app><!--openSideMenuを使用する場合はmethodsのopenSideMenuのコメントアウト解除、toggleSideMenuをコメントアウト、 @click="openSideMenu"にする-->
      <v-toolbar-side-icon @click="toggleSideMenu"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>My List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
      <SideNav/>
    <v-content>
      <!-- ルートごとに設定したコンポーネントが表示されるようになる -->
      <router-view></router-view>
    </v-content>
    <div id="nav">
      <router-link :to="{name: 'home'}">ホーム</router-link> |
      <router-link :to="{name: 'boardgamelist'}">ボードゲームリスト</router-link> |
      <router-link :to="{name: 'about'}">このサイトについて</router-link> |
      <router-link :to="{name: 'capture-page'}">キャプチャページ</router-link>
    </div>
  </v-app>
</template>

<script>
// VuexのライブラリからmapActionsメソッドをインポートしている
// コンポーネントのmethodsにstoreのアクションメソッドを組み込む役割を持っている
// ES6の分割代入という構文を使用することでアクションメソッドをmethodsのところに組み込める
import { mapActions } from 'vuex'
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
    // openSideMenu(){
    //   // コンポーネントのインスタンス上ではthis.$storeでストアにアクセスできる
    //   // ストアはdispatchというメソッドを持っておりdispatch()メソッド経由でアクションを呼び出せるようになっている
    //   this.$store.dispatch('toggleSideMenu')
    // },// ES6の分割代入という構文を使用することでmethodsのところに組み込める。複数使用したいアクションがあれば配列の中身を増やす
    ...mapActions(['toggleSideMenu'])
    // 点３つの部分が分割代入の構文でこれでオブジェクト内に含まれるアクションメソッドをそれぞれmethods内に展開する意味になり
    // メソッドとしてtoggleSideMenuアクションを呼び出せるようになる
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

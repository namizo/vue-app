<template>
<!--テンプレートから$storeでストアにアクセスできる。stateは$store.stateで参照できる-->
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>マイリスト</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {

      items: [
        { title: 'ホーム', icon: 'home', link: {name: 'home'}},
        { title: 'ボードゲームリスト', icon: 'list', link: {name: 'boardgamelist'}},
        { title: 'このサイトについて', icon: 'info', link: {name: 'about'}},
        { title: 'キャプチャページ', icon: 'widgets', link: {name: 'capture-page'}}
      ]
    }
  }
}
</script>

<style></style>
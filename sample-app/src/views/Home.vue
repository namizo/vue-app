<template>
  <div class="home">
  <v-app>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://secure.i.telegraph.co.uk/multimedia/archive/01635/snoopy_1635791c.jpg"
            aspect-ratio="1.75"
          ></v-img>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Vuex</h3>
              <div style="white-space:pre-wrap;"> {{ card_text }} </div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Vuetify</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      card_text: `状態の管理を行うためのモジュール。
コンポーネントで使用されるデータの状態を管理する。
vue-cliを導入すればvuexも組み込まれている。

■store ・・・簡単にいうとデータの入れ物
・各コンポーネントはストアにアクセスすることでデータを出し入れできる。
以下４つの機能を持つ
Action・・・コンポーネントからデータの更新やデータの取得の指示を受ける部分
Mutation・・・アクションから受け取ったデータをステートに格納したり既存のデータを更新する役割を担う
State・・・・データを格納する入れ物。ストアのデータはすべてステートに保持される。（コンポーネントのdataにあたる）
Getter・・・・・ステートのデータを加工したものを受け取る場合
・基本的にはアプリケーションでストアは１つだけ

Vue.use(VueRouter) //Vuexモジュールの有効化
このwebアプリはvue add vuetifyをしてvuetifyを使用している https://v15.vuetifyjs.com/ja/components/api-explorer

storeにメニューの開閉状態を表すdrawerを定義
初期状態は閉じた状態にしておきたいのでデフォルトにfalseをセット

コンポーネントから呼び出されたactionはcommitメソッドを呼び出しmutationのtoggleSideMenuが呼び出された際にこのmutationが呼び出され、stateのdrawerを更新している

■コンポーネントからストアにアクセスする方法は
・テンプレートから$storeでストアにアクセスできる。(SideNav.vue)
stateは$store.stateで参照できる
ここではv-model="$store.state.drawer"と記述してstoreのdrawer変数のメニューの開閉状態をコントロールできるようになる
・Headerのアイコンからdrawerの値を変更するようになる実装（App.Vue）
v-toolbar-side-iconの部分のコンポーネントがHeaderのアイコンにあたるので
      <v-toolbar-side-icon v-on:click="openSideMenu"></v-toolbar-side-icon>
      methodsにopenSideMenuを定義
      コンポーネントのインスタンス上ではthis.$storeでストアのメソッドにアクセスできる
      ストアはdispatchメソッドをもっていてdispatchメソッド経由でactionに定義したtogggleSideMenuを呼び出せる

<router-view></router-view>・・・・・ルートごとに設定したコンポーネントが表示されるようになる

:to="item.link"・・・・・・サイドバーメニューのリンクを生成してくれる`
    }
  }
}
</script>

<style>
/* 
.home{
  margin-top: 100px;
  margin-left: 400px;
} */

</style>

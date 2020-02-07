import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    // commitでtoggleSideMenuが呼び出されたときにこのmutationが呼ばれる
    toggleSideMenu(state) {
      // mutationのメソッドには自動でstateが渡ってくる
      state.drawer = !state.drawer;
    }
  },
  //コンポーネントのインターフェース
  actions: {
    // アクションメソッドの引数には、自動的にcontextオブジェクトが渡ってくる。これはcontext.commitメソッドのみを受け取る書き方
    // コンポーネントからactionのメソッド（toggleSideMenu）を呼び出す
    toggleSideMenu({ commit }) {
      commit("toggleSideMenu"); //commitメソッドはmutationのメソッドを呼び出すために使用されるもの
    }
  },
  modules: {}
});

import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
//import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //vuetify,
  render: h => h(App) // 仮想DOM（DOM要素を模したJSのオブジェクト）DOMを直接操作する操作、削除や追加、参照、は遅い。直接DOMを操作しないことで高速化できる (あくまでvueのcreateElementであってdocment.createElementとは別物、docmentはブラウザにあるオブジェクト)
}).$mount('#app')//仮想DOMを実際のDOMにしている（elも同じ）

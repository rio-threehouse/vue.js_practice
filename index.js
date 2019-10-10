var app = new Vue ({
  // el: Vueアプリケーションとマウントする（繋げる）DOM要素orセレクタを指定
  el: '#app',
  // data: インスタンスの中のデータを指定
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue ({
  el: '#app-2',
  data: {
    // new : インスタンスを生成する
    // DateオブジェクトのtoLocaleString()メソッド 指定日時を文字列に変換
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
}) 

var app3 = new Vue ({
  el: '#app-3',
  data: {
    seen: true
  }
})
var app4 = new Vue ({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript'},
      { text: 'Learn Vue'},
      { text: 'Learn Build somthing awsome'}
    ]
  }
})
// app4.todos.push({ text: 'New item'}) コンソールでリストにデータを追加できる

var app5 = new Vue ({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue ({
  el: '#app-6',
  data: {
    message1: 'v-modelメッセージ',
    message2: 'v-bindメッセージ'
  }
})
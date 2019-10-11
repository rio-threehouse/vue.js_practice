// ローカルストレージAPIの使用 ローカルストレージ＝情報をブラウザ上に保存しておく場所
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function() {
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

const app = new Vue({
  el: '#app',
  data: {
    // 使用するデータ アプリで使用したいデータはdataオプションへ登録していく
  },
  methods: {
    // 使用するメソッド
  }
})
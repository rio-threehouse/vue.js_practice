// ローカルストレージAPIの使用 ローカルストレージ＝情報をブラウザ上に保存しておく場所
var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

new Vue({
  el: '#app',
  data: {
    // todoリストデータ用の配列初期値
    todos: [],
    // 選択しているoptionsのvalurを記憶するためのデータ
    options: [
      { value: -1, label: '全て'},
      { value: 0, label: '作業中'},
      { value: 1, label: '完了'}
    ],
    // 初期値は「全て」
    current: -1
  },
  computed: {
    conputedTodos: function() {
      return this.todos.filter(function(el) {
        // データcurrentが-1なら全て(true)
        // それ以外ならcurrentとstateが一致するものだけに絞り込む
        return this.current < 0 ? true : this.current === el.state
      },this)
    }
  },
  methods: {
    doAdd: function(event, value) {
      // refで名前をつけた要素を参照する
      var comment = this.$refs.comment
      // 入力がなければ何もしないでreturn
      if (!comment.value.length) {
        return
      }
      // id,コメント内容,作業状態をtodosリストへpush
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      // フォームを空にする
      comment.value = ''
    },
    doChangeState: function(item) {
      // 状態変更の処理
      item.state = item.state ? 0 : 1
    },
    doRemove: function(item) {
      // indexOf: 文字列検索
      var delete_item_index = this.todos.indexOf(item)
      // splice: 要素の削除 
      this.todos.splice(delete_item_index, 1)
    }
  },
  watch: {
    todos: {
      // 引数はwatchしているプロパティの変更後の値
      handler: function(todos) {
        todoStorage.save(todos)
      },
      // ネストしているデータも監視できる
      deep: true
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  }
})
var app = new Vue ({
  el: '#app',
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
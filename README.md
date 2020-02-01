# ログインについて復習

インターンでlaravelを触った際に色々詰まったので、振り返りつつ学習。

## 詰まったところ

- formタグを使うと、ページが更新されてしまう。<br>
　対策:｀@submit.prevent｀を使う。

- リロードを行なったら、vuexのデータが空になって、勝手にログアウトされる<br>
　対策:｀vuex-persistedstate｀モジュールで、vuexをセッションストレージに保持<br>
  [vuex-persistedstateのリポジトリ](https://github.com/robinvdvleuten/vuex-persistedstate)
# ログインについて復習

インターンでlaravelを触った際に色々詰まったので、振り返りつつ学習。

# やり方

1. `cp .env.example .env` 

1. .env のデータベース部分を書き換え(postgreSQLの場合)<br>
  DB_CONNECTION=pgsql
  DB_HOST=127.0.0.1
  DB_PORT=5432
  DB_DATABASE=データベース名
  DB_USERNAME=ユーザーネーム
  DB_PASSWORD=パスワード<br>

1. config/databaseを `'default' => env('DB_CONNECTION', 'pgsql')` に書き換え

1. `pg_ctl start` (postgreSQLの場合)

1. `php artisan migrate`

1. `composer install` & `npm install`

1. `php artisan serve` & `npm run watch`

1. http://127.0.0.1:8000

備考: <br>
`--with-pgsql`と`--with-pdo-pgsql`はデフォルトでは入ってないので、<br>
`/Users/ユーザー名/.phpenv/plugins/php-build/share/php-build/`の<br>
`default_configure_options`ファイルに、上記２つを追記してphpを再インストールする。

## 詰まったところ

- formタグを使うと、ページが更新されてしまう。<br>
　対策: `@submit.prevent` を使う。

- リロードを行なったら、vuexのデータが空になって、勝手にログアウトされる<br>
　対策: `vuex-persistedstate` モジュールで、vuexをセッションストレージに保持<br>
  [vuex-persistedstateのリポジトリ](https://github.com/robinvdvleuten/vuex-persistedstate)
  
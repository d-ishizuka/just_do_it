
# Just Do It API

タスク管理アプリケーションのバックエンドAPI（Go言語実装）

## 💡 概要

このAPIサーバーはタスク管理アプリケーションのバックエンド機能を提供します。ユーザー認証、タスクの作成・取得・更新・削除などの機能を含みます。

## 📋 必要条件

- Go言語環境（1.16以上推奨）
- Docker および Docker Compose
- 環境変数ファイル（`.env`）

## 🚀 セットアップ手順

### 1. モジュールの初期化（初回のみ）

```bash
go mod init just_do_it
```

### 2. データベースコンテナの起動

**重要**: APIサーバーを起動する前に必ずDBコンテナを立ち上げてください

```bash
docker compose up -d
```

### 3. データベースのマイグレーション実行

```bash
GO_ENV=dev go run migrate/migrate.go
```

### 4. APIサーバーの起動

```bash
GO_ENV=dev go run .
```

サーバーが起動すると、デフォルトで `localhost:8080` でAPIが利用可能になります。

## 💻 開発コマンド集

```bash
# データベースコンテナ削除（データも全て削除されます）
docker compose rm -s -f -v

# テストの実行
go test ./...

# 特定の環境でサーバー起動
GO_ENV=production go run .
```

## 📝 注意事項

- 本番環境では適切な環境変数設定を行ってください
- APIデバッグにはPostmanやcurlが便利です
- CSRFトークン保護が有効なため、適切なヘッダー設定が必要です

---
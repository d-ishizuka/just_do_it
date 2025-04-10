# Just Do It - タスク管理アプリケーション
フルスタックのタスク管理Webアプリケーション（Go + React）

## 📋 概要
このプロジェクトは、Go言語で実装されたバックエンドAPIと、ReactとTypeScriptで構築されたフロントエンドから成るタスク管理アプリケーションです。JWTによる認証機能、CSRFトークン保護、タスクの作成・編集・削除などの機能を備えています。

## 🏗️ プロジェクト構成
```
just_do_it/
├── api/          # Go言語バックエンドAPI
├── front/        # React+TypeScriptフロントエンド
└── README.md     # このファイル
```

## ⚙️ 使用技術
### バックエンド
- Go言語
- Echo（Webフレームワーク）
- GORM（ORM）
- JWT認証
- Docker（PostgreSQL）

### フロントエンド
- React (Create React App)
- TypeScript
- React Query (TanStack Query)
- Zustand（状態管理）
- Tailwind CSS
- Axios

## 🚀 セットアップと実行手順
1. バックエンドのセットアップ

### データベースの準備
```bash
# プロジェクトルートディレクトリで実行
docker compose up -d
```

### APIサーバーの起動
```bash
cd api
GO_ENV=dev go run migrate/migrate.go  # マイグレーション実行
GO_ENV=dev go run .  # サーバー起動
```
APIサーバーは http://localhost:8080 で実行されます。

2. フロントエンドのセットアップ
```bash
cd front
npm install  # 依存パッケージのインストール
```
環境変数の設定
```.env```ファイルを作成し、以下の内容を設定:
```bash
REACT_APP_API_URL=http://localhost:8080
```

フロントエンドアプリケーションの起動
```bash
npm start
```
フロントエンドは http://localhost:3001 で実行されます。

## 🛠️ 開発コマンド
バックエンド
```bash
# テスト実行
cd api && go test ./...

# データベースコンテナのリセット
docker compose rm -s -f -v
```

フロントエンド
```bash
# テスト実行
cd front && npm test

# 本番ビルド
cd front && npm run build
```

## 📝 注意事項
- APIサーバーはフロントエンドより先に起動する必要があります
- データベースコンテナが稼働していないとAPIサーバーは正常に動作しません
- 開発環境では適切なCORS設定が必要です
- CSRFトークン保護が有効です

## 🔒 認証について
- アプリケーションはJWT認証を使用しています
- ログアウト時にはJWTとタスクキャッシュが削除されます
- セッション有効期限は24時間です
- 詳細は各ディレクトリ内のREADMEをご参照ください。

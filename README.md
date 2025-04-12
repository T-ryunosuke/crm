# Simple CRM - 顧客管理システム

シンプルでユーザーフレンドリーな顧客管理システムのフロントエンド実装です。
このアプリケーションは、ログイン機能と顧客情報の管理機能を提供します。

[![Image from Gyazo](https://i.gyazo.com/8d29ede9ffadbb4c47eccf0ea8ce2721.png)](https://gyazo.com/8d29ede9ffadbb4c47eccf0ea8ce2721)

## 目次

- [機能概要](#機能概要)
- [セットアップ手順](#セットアップ手順)
- [使用した技術・ライブラリ](#使用した技術ライブラリ)
- [実装した機能の説明](#実装した機能の説明)
- [動作確認方法](#動作確認方法)
- [フォルダ構成](#フォルダ構成)
- [今後の改善点](#今後の改善点)

## 機能概要

このアプリケーションは以下の主要機能を提供します：

- シンプルなログイン画面
- 顧客情報の一覧表示
- 顧客情報の検索機能
- 顧客データの並び替え機能
- レスポンシブデザイン対応

## セットアップ手順

以下の手順でアプリケーションをローカル環境で実行できます。

### 前提条件

- Node.js (v14.0.0 以上)
- npm (v6.0.0 以上)

### インストール

1. リポジトリをクローンします

```bash
git clone https://github.com/yourusername/simple-crm.git
cd simple-crm
```

2. 依存パッケージをインストールします

```bash
npm install
```

3. アプリケーションを起動します

```bash
npm run dev
```

4. ターミナルに表示されるlocalhostのURLにアクセスしてください。


## 使用した技術・ライブラリ

- **言語**: Typescript
- **フレームワーク**: React (Vite)
- **UI ライブラリ**: ShadCN-UI
- **スタイリング**: Tailwindcss
- **開発ツール**: ESLint, Prettier

## 実装した機能の説明

### 1. ログイン機能

- ユーザーID・パスワード入力フォーム
- 入力バリデーション（空欄時ボタン非活性化）
- エラーメッセージ表示（機能としてはあるものの非活性化するため無用の長物）

### 2. 顧客一覧画面

- 顧客情報のカード形式での表示
  - 顧客名
  - 顧客名の振り仮名
  - メールアドレス
  - 電話番号
  - 登録日

- **検索機能**
  - 顧客名による絞り込み検索
  - リアルタイム検索結果表示
- **並び替え機能**
  - 名前順
  - 登録日順
- **レスポンシブ対応**
  - スマートフォン向けの最適化表示

### 3. デザイン

- ShadCN-UIを使用した一貫性のあるデザイン
- アクセシビリティに配慮したUI設計

## 動作確認方法

### 顧客一覧画面

1. アプリケーションを起動すると、顧客一覧画面が表示されます。
2. ヘッダーの下にある検索欄に顧客名を入力することで検索ができます。
3. 顧客名順や登録名順のボタンを押すことで、データを並び替えることができます。
4. ブラウザの幅を狭めると、レスポンシブ対応された表示に自動的に切り替わります。

### ログイン画面

1. 顧客一覧画面でログアウトボタンを押すとログイン画面に移ります。
2. ユーザーIDとパスワードに文字を入力してログインボタンを押すことで、ログイン風の操作ができます。
※入力欄が空の状態ではログインボタンを押すことはできません。

## フォルダ構成

```
src/
├── components/
│   ├── common/
│   │    └── LogoutButtonWithConfirm.tsx  # 確認ダイアログ付きログアウト
│   ├── customers/
│   │   └── CustomerList
│   │       ├── index.tsx        # 顧客リスト表示
│   │       ├── SearchBox.tsx    # 検索ボックス
│   │       └── SortButtons.tsx  # 並び替えボタン
│   ├── header/
│   │   └── index.tsx   # ヘッダー
│   ├── sidebar/
│   │   ├── index.tsx         # サイドバー
│   │   └── UserItem.tsx.tsx  # ログインユーザー情報表示
│   ├── ui/
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── avatar.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── navigation-menu.tsx
├── data/
│   └── customers.ts    # 顧客データ用
├── hooks/
│   └── useSearch.ts    # 検索のHooks用
├── lib/
│   ├── sortCustomers.ts  # 並び替え関数用
│   ├── supabase.ts       # supabase連携用
│   └── utils.ts          # ユーティリティ関数用
├── modules/
│   ├── auth/
│   │   ├── auth.repository.ts     # 認証のsupabase操作
│   │   ├── current-user.state.ts  # ログインユーザーグローバル管理
│   │   └── use-signout.ts         # ログアウト
│   └── customers/
│       ├── customer.entity.ts      # supabaseの顧客の型
│       └── customer.repository.ts  # 顧客のsupabase操作
├── pages/
│   ├── auth/
│   │   ├── Signin.tsx  # サインイン
│   │   └── Signup.tsx  # サインアップ
│   └── customers/
│       ├── CreateCustomer.tsx  # 顧客登録
│       └── index.tsx           # 顧客一覧
├── types/
│   └── customer.ts           # 顧客データの型定義用
├── App.tsx             # アプリケーションのルート
├── index.css           # グローバルなスタイル
├── Layout.tsx          # 共通レイアウト
├── main.tsx            # エントリーポイント
└── vite-env.d.ts       # Viteの環境設定用の型定義
```

## 今後の改善点

- 顧客詳細画面の実装
- フィルタリング機能の拡張
- 顧客データの~~登録~~・編集・削除機能
- ~~バックエンドとの連携（API実装）~~
- テストの追加

# C Algorithm Hub - 技術仕様書

## 概要

C Algorithm Hubは、C言語で実装されたアルゴリズムを学習するためのシングルページアプリケーション（SPA）です。React 19とモダンなフロントエンド技術を使用して構築されています。

## アーキテクチャ

### システム構成
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   ブラウザ      │    │   Vite Dev      │    │   静的ファイル  │
│   (Client)      │◄──►│   Server        │◄──►│   (Assets)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │
         │                       │
         ▼                       ▼
┌─────────────────┐    ┌─────────────────┐
│   React App     │    │   Build System  │
│   (SPA)         │    │   (Vite)        │
└─────────────────┘    └─────────────────┘
```

### コンポーネント階層
```
App
├── Layout
│   ├── Header
│   ├── Main Content
│   │   ├── HomePage
│   │   ├── AlgorithmList
│   │   └── AlgorithmDetail
│   └── Footer
```

## 技術スタック

### フロントエンド
| 技術 | バージョン | 用途 |
|------|------------|------|
| React | 19.1.0 | UIライブラリ |
| Vite | 6.0.5 | ビルドツール・開発サーバー |
| Tailwind CSS | 3.4.17 | CSSフレームワーク |
| shadcn/ui | Latest | UIコンポーネント |
| Lucide React | 0.468.0 | アイコンライブラリ |

### マークダウン・コードハイライト
| 技術 | バージョン | 用途 |
|------|------------|------|
| react-markdown | 10.1.0 | マークダウンレンダリング |
| remark-gfm | 4.0.1 | GitHub Flavored Markdown |
| react-syntax-highlighter | 15.6.1 | シンタックスハイライト |

### 開発ツール
| 技術 | バージョン | 用途 |
|------|------------|------|
| pnpm | 10.4.1 | パッケージマネージャー |
| ESLint | 9.17.0 | コード品質管理 |
| PostCSS | 8.5.1 | CSS処理 |

## データ構造

### アルゴリズムオブジェクト
```javascript
{
  id: string,                    // 一意識別子
  name: string,                  // アルゴリズム名
  category: string,              // カテゴリ
  description: string,           // マークダウン形式の説明
  codeImplementation: string,    // C言語コード
  timeComplexity: {
    best: string,                // 最良時間計算量
    average: string,             // 平均時間計算量
    worst: string                // 最悪時間計算量
  },
  spaceComplexity: string,       // 空間計算量
  tags: string[],                // タグ配列
  advantages: string[],          // 利点配列
  disadvantages: string[],       // 欠点配列
  useCases: string[]             // 使用例配列
}
```

### 状態管理
```javascript
// App.jsx内のstate
{
  currentPage: string,           // 現在のページ
  selectedAlgorithmId: string,   // 選択されたアルゴリズムID
  selectedTag: string            // 選択されたタグ
}
```

## 機能仕様

### 1. ページ遷移システム
- **実装方式**: React state-based routing
- **ページ種類**: home, algorithms, algorithm-detail
- **スクロール制御**: ページ遷移時に自動的にトップへスクロール

### 2. 検索・フィルタリング機能
- **検索対象**: アルゴリズム名、説明文
- **フィルター種類**: カテゴリ、タグ
- **実装**: useMemoによるリアルタイムフィルタリング

### 3. マークダウンレンダリング
- **対応記法**: GitHub Flavored Markdown
- **カスタムスタイル**: Tailwind CSSクラスによるスタイリング
- **コンポーネント**: react-markdownのカスタムコンポーネント

### 4. コードハイライト
- **言語**: C言語
- **テーマ**: tomorrow（ダークテーマ）
- **機能**: 行番号表示、コピー機能

## パフォーマンス最適化

### 1. バンドル最適化
- **ツール**: Vite（Rollupベース）
- **コード分割**: 動的インポート
- **Tree Shaking**: 未使用コードの除去

### 2. レンダリング最適化
- **useMemo**: フィルタリング結果のメモ化
- **useCallback**: イベントハンドラーのメモ化
- **React.memo**: コンポーネントのメモ化（必要に応じて）

### 3. 画像最適化
- **favicon**: PNG形式、複数サイズ対応
- **アイコン**: SVGベースのLucide React

## セキュリティ

### 1. XSS対策
- **マークダウン**: react-markdownによる安全なレンダリング
- **入力値**: 検索入力の適切なエスケープ

### 2. CSP（Content Security Policy）
- **インライン**: 最小限のインラインスクリプト
- **外部リソース**: 信頼できるソースのみ

## アクセシビリティ

### 1. キーボードナビゲーション
- **フォーカス管理**: 適切なtabindex設定
- **キーボードショートカット**: 標準的なナビゲーション

### 2. スクリーンリーダー対応
- **セマンティックHTML**: 適切なHTML要素の使用
- **ARIA属性**: 必要に応じたARIAラベル

### 3. カラーコントラスト
- **WCAG準拠**: AA基準のコントラスト比
- **カラーパレット**: アクセシブルな色選択

## レスポンシブデザイン

### ブレークポイント
```css
/* Tailwind CSS ブレークポイント */
sm: 640px    /* タブレット */
md: 768px    /* 小型デスクトップ */
lg: 1024px   /* デスクトップ */
xl: 1280px   /* 大型デスクトップ */
```

### レイアウト戦略
- **モバイルファースト**: 小画面から大画面へ
- **フレキシブルグリッド**: CSS GridとFlexbox
- **タッチフレンドリー**: 適切なタッチターゲットサイズ

## ビルドとデプロイ

### 開発環境
```bash
pnpm run dev    # 開発サーバー起動
pnpm run build  # プロダクションビルド
pnpm run preview # ビルド結果のプレビュー
```

### ビルド出力
```
dist/
├── index.html           # メインHTML
├── assets/
│   ├── index-[hash].js  # メインJavaScript
│   ├── index-[hash].css # メインCSS
│   └── favicon.png      # favicon
```

### デプロイ要件
- **静的ホスティング**: Netlify, Vercel, GitHub Pages対応
- **SPA設定**: すべてのルートをindex.htmlにリダイレクト
- **HTTPS**: 必須（モダンブラウザ機能のため）

## 監視とログ

### エラーハンドリング
- **React Error Boundary**: コンポーネントレベルのエラー処理
- **try-catch**: 非同期処理のエラーハンドリング

### パフォーマンス監視
- **Web Vitals**: Core Web Vitalsの測定
- **Bundle Analyzer**: バンドルサイズの分析

## 拡張性

### 新機能追加
1. **新しいアルゴリズム**: `algorithms.js`にデータ追加
2. **新しいページ**: コンポーネント作成とルーティング追加
3. **新しいフィルター**: フィルタリングロジックの拡張

### 国際化対応
- **i18n準備**: 文字列の外部化
- **多言語対応**: React i18nextの導入可能

## テスト戦略

### 単体テスト
- **フレームワーク**: Vitest（推奨）
- **対象**: ユーティリティ関数、フィルタリングロジック

### 統合テスト
- **フレームワーク**: React Testing Library
- **対象**: コンポーネントの相互作用

### E2Eテスト
- **フレームワーク**: Playwright（推奨）
- **対象**: ユーザーフロー全体

## 今後の改善点

### 短期的改善
1. **検索機能強化**: あいまい検索、ハイライト
2. **お気に入り機能**: ローカルストレージ活用
3. **ダークモード**: テーマ切り替え機能

### 長期的改善
1. **バックエンド統合**: API化、ユーザー管理
2. **インタラクティブ可視化**: アルゴリズムの動作アニメーション
3. **学習進捗管理**: 進捗トラッキング機能

---

この技術仕様書は、C Algorithm Hubの技術的な詳細と実装方針を記載しています。開発・保守・拡張の際の参考資料として活用してください。


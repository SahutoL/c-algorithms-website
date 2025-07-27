import { Code, Github, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ロゴとサイト説明 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">C Algorithm Hub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              C言語で実装された様々なアルゴリズムを学習できるプラットフォームです。
              ソート、探索、グラフアルゴリズムなど、基本的なアルゴリズムから
              高度なアルゴリズムまで幅広く紹介しています。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* アルゴリズムカテゴリ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">アルゴリズム</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  ソートアルゴリズム
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  探索アルゴリズム
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  グラフアルゴリズム
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  動的プログラミング
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  データ構造
                </a>
              </li>
            </ul>
          </div>

          {/* リソース */}
          <div>
            <h3 className="text-lg font-semibold mb-4">リソース</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  学習ガイド
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  計算量について
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  C言語基礎
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#" onClick={() => window.location.href = '/privacy-policy'} className="text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" onClick={() => window.location.href = '/contact'} className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 C Algorithm Hub. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for learning</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

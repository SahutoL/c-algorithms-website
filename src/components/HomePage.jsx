import { ArrowRight, Clock, Zap, BookOpen, Code2, Search, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const HomePage = ({ onPageChange }) => {
  const algorithmCategories = [
    {
      title: 'ソートアルゴリズム',
      description: 'バブルソート、クイックソート、マージソートなど',
      icon: BarChart3,
      count: 8,
      tag: 'sort'
    },
    {
      title: '探索アルゴリズム',
      description: '線形探索、二分探索、深さ優先探索など',
      icon: Search,
      count: 6,
      tag: 'search'
    },
    {
      title: 'グラフアルゴリズム',
      description: 'ダイクストラ法、最小全域木、トポロジカルソートなど',
      icon: Code2,
      count: 10,
      tag: 'graph'
    }
  ]

  const features = [
    {
      icon: Code2,
      title: 'C言語実装',
      description: '全てのアルゴリズムがC言語で実装されており、実際のコードを確認できます。'
    },
    {
      icon: Clock,
      title: '計算量解析',
      description: '時間計算量と空間計算量の詳細な解析と説明を提供します。'
    },
    {
      icon: Zap,
      title: '視覚的理解',
      description: 'アルゴリズムの動作を図解で分かりやすく説明します。'
    },
    {
      icon: BookOpen,
      title: '学習ガイド',
      description: '初心者から上級者まで、段階的に学習できるガイドを提供します。'
    }
  ]

  const handleCategoryClick = (tag) => {
    onPageChange('algorithms', { tag })
  }

  return (
    <div className="space-y-16">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              C言語で学ぶ
              <span className="text-blue-600 block">アルゴリズム</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ソート、探索、グラフアルゴリズムなど、プログラミングの基礎となる
              アルゴリズムをC言語の実装とともに学習できるプラットフォームです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="flex items-center space-x-2"
                onClick={() => onPageChange('algorithms')}
              >
                <span>アルゴリズムを探索</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                学習ガイドを見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* アルゴリズムカテゴリ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              アルゴリズムカテゴリ
            </h2>
            <p className="text-lg text-gray-600">
              様々なカテゴリのアルゴリズムを学習できます
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {algorithmCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card 
                  key={index} 
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => handleCategoryClick(category.tag)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {category.count}個のアルゴリズム
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                    <Button variant="ghost" className="mt-4 p-0 h-auto font-medium text-blue-600 hover:text-blue-700">
                      詳細を見る →
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              なぜC Algorithm Hubなのか
            </h2>
            <p className="text-lg text-gray-600">
              効率的で実践的なアルゴリズム学習を支援します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            今すぐアルゴリズム学習を始めましょう
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            豊富なアルゴリズムライブラリと詳細な解説で、
            プログラミングスキルを向上させましょう。
          </p>
          <Button 
            size="lg" 
            className="flex items-center space-x-2 mx-auto"
            onClick={() => onPageChange('algorithms')}
          >
            <span>学習を開始する</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage


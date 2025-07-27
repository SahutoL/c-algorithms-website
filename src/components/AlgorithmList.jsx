import { useState, useMemo } from 'react'
import { Search, Clock, BarChart3, Filter } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { algorithms, getAllCategories, getAllTags } from '../data/algorithms'

const AlgorithmList = ({ selectedTag = null, onAlgorithmSelect }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTagFilter, setSelectedTagFilter] = useState(selectedTag || 'all')

  const categories = getAllCategories()
  const tags = getAllTags()

  // フィルタリングされたアルゴリズム
  const filteredAlgorithms = useMemo(() => {
    return algorithms.filter(algorithm => {
      const matchesSearch = algorithm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           algorithm.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || algorithm.category === selectedCategory
      const matchesTag = selectedTagFilter === 'all' || algorithm.tags.includes(selectedTagFilter)
      
      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchTerm, selectedCategory, selectedTagFilter])

  // 計算量の表示用関数
  const getComplexityColor = (complexity) => {
    if (complexity.includes('O(1)')) return 'bg-green-100 text-green-800'
    if (complexity.includes('O(log n)')) return 'bg-blue-100 text-blue-800'
    if (complexity.includes('O(n)')) return 'bg-yellow-100 text-yellow-800'
    if (complexity.includes('O(n log n)')) return 'bg-orange-100 text-orange-800'
    if (complexity.includes('O(n²)')) return 'bg-red-100 text-red-800'
    return 'bg-gray-100 text-gray-800'
  }

  // タグの色を取得
  const getTagColor = (tag) => {
    const colors = {
      'sort': 'bg-blue-100 text-blue-800',
      'search': 'bg-green-100 text-green-800',
      'graph': 'bg-purple-100 text-purple-800',
      'basic': 'bg-gray-100 text-gray-800',
      'advanced': 'bg-red-100 text-red-800',
      'recursive': 'bg-orange-100 text-orange-800',
      'divide-conquer': 'bg-indigo-100 text-indigo-800',
      'stable': 'bg-emerald-100 text-emerald-800'
    }
    return colors[tag] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          アルゴリズム一覧
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          C言語で実装された様々なアルゴリズムを探索できます。
          ソート、探索、グラフアルゴリズムなど、幅広いカテゴリから学習したいアルゴリズムを見つけましょう。
        </p>
      </div>

      {/* フィルター */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="text-lg font-semibold">フィルター</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 検索 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="アルゴリズムを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* カテゴリフィルター */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="カテゴリを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべてのカテゴリ</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* タグフィルター */}
          <Select value={selectedTagFilter} onValueChange={setSelectedTagFilter}>
            <SelectTrigger>
              <SelectValue placeholder="タグを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">すべてのタグ</SelectItem>
              {tags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 結果数表示 */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredAlgorithms.length}個のアルゴリズムが見つかりました
        </p>
        {(selectedTag && selectedTag !== 'all') && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">選択されたタグ:</span>
            <Badge className={getTagColor(selectedTag)}>
              {selectedTag}
            </Badge>
          </div>
        )}
      </div>

      {/* アルゴリズムカード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlgorithms.map((algorithm) => (
          <Card 
            key={algorithm.id} 
            className="hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => onAlgorithmSelect && onAlgorithmSelect(algorithm.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {algorithm.name}
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {algorithm.category}
                  </CardDescription>
                </div>
                <BarChart3 className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* 説明 */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {algorithm.description.split('\\n')[0]}
              </p>

              {/* 計算量 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium">時間計算量</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge className={getComplexityColor(algorithm.timeComplexity.average)}>
                    平均: {algorithm.timeComplexity.average}
                  </Badge>
                  <Badge className={getComplexityColor(algorithm.timeComplexity.worst)}>
                    最悪: {algorithm.timeComplexity.worst}
                  </Badge>
                </div>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap gap-1">
                {algorithm.tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className={`text-xs ${getTagColor(tag)}`}
                  >
                    {tag}
                  </Badge>
                ))}
                {algorithm.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{algorithm.tags.length - 3}
                  </Badge>
                )}
              </div>

              {/* アクションボタン */}
              <Button 
                variant="ghost" 
                className="w-full mt-4 group-hover:bg-blue-50 group-hover:text-blue-600"
              >
                詳細を見る →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 結果なしの場合 */}
      {filteredAlgorithms.length === 0 && (
        <div className="text-center py-12">
          <BarChart3 className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            アルゴリズムが見つかりませんでした
          </h3>
          <p className="text-gray-500 mb-4">
            検索条件を変更して再度お試しください
          </p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('all')
              setSelectedTagFilter('all')
            }}
          >
            フィルターをリセット
          </Button>
        </div>
      )}
    </div>
  )
}

export default AlgorithmList


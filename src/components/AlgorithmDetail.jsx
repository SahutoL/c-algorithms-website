import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { 
  ArrowLeft, 
  Clock, 
  MemoryStick, 
  Code, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  Copy,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getAlgorithmById } from '../data/algorithms'

const AlgorithmDetail = ({ algorithmId, onBack }) => {
  const [copiedCode, setCopiedCode] = useState(false)
  const algorithm = getAlgorithmById(algorithmId)

  if (!algorithm) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          アルゴリズムが見つかりません
        </h2>
        <Button onClick={onBack}>
          一覧に戻る
        </Button>
      </div>
    )
  }

  // コードをクリップボードにコピー
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(algorithm.codeImplementation)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } catch (err) {
      console.error('コピーに失敗しました:', err)
    }
  }

  // 計算量の表示用関数
  const getComplexityColor = (complexity) => {
    if (complexity.includes('O(1)')) return 'bg-green-100 text-green-800 border-green-200'
    if (complexity.includes('O(log n)')) return 'bg-blue-100 text-blue-800 border-blue-200'
    if (complexity.includes('O(n)')) return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    if (complexity.includes('O(n log n)')) return 'bg-orange-100 text-orange-800 border-orange-200'
    if (complexity.includes('O(n²)')) return 'bg-red-100 text-red-800 border-red-200'
    return 'bg-gray-100 text-gray-800 border-gray-200'
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
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>一覧に戻る</span>
        </Button>
      </div>

      {/* タイトルセクション */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {algorithm.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {algorithm.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {algorithm.tags.map((tag) => (
                <Badge key={tag} className={getTagColor(tag)}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 計算量カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>時間計算量</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">最良の場合:</span>
              <Badge className={getComplexityColor(algorithm.timeComplexity.best)}>
                {algorithm.timeComplexity.best}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">平均的な場合:</span>
              <Badge className={getComplexityColor(algorithm.timeComplexity.average)}>
                {algorithm.timeComplexity.average}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">最悪の場合:</span>
              <Badge className={getComplexityColor(algorithm.timeComplexity.worst)}>
                {algorithm.timeComplexity.worst}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MemoryStick className="h-5 w-5 text-green-600" />
              <span>空間計算量</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Badge className={getComplexityColor(algorithm.spaceComplexity)} size="lg">
                {algorithm.spaceComplexity}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* メインコンテンツ */}
      <Tabs defaultValue="description" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="description">説明</TabsTrigger>
          <TabsTrigger value="implementation">実装</TabsTrigger>
          <TabsTrigger value="analysis">分析</TabsTrigger>
          <TabsTrigger value="usage">使用例</TabsTrigger>
        </TabsList>

        {/* 説明タブ */}
        <TabsContent value="description">
          <Card>
            <CardHeader>
              <CardTitle>アルゴリズムの説明</CardTitle>
              <CardDescription>
                {algorithm.name}の動作原理と特徴について詳しく解説します
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-2xl font-bold mt-6 mb-4 text-gray-900">{children}</h1>,
                    h2: ({children}) => <h2 className="text-xl font-semibold mt-5 mb-3 text-gray-800">{children}</h2>,
                    h3: ({children}) => <h3 className="text-lg font-medium mt-4 mb-2 text-gray-700">{children}</h3>,
                    p: ({children}) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1 text-gray-600">{children}</ul>,
                    ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-600">{children}</ol>,
                    li: ({children}) => <li className="mb-1">{children}</li>,
                    strong: ({children}) => <strong className="font-semibold text-gray-800">{children}</strong>,
                    code: ({children}) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>
                  }}
                >
                  {algorithm.description}
                </ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 実装タブ */}
        <TabsContent value="implementation">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="h-5 w-5" />
                    <span>C言語実装</span>
                  </CardTitle>
                  <CardDescription>
                    実際に動作するC言語のコード実装です
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>コピー済み</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>コピー</span>
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <SyntaxHighlighter
                  language="c"
                  style={tomorrow}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                  showLineNumbers={true}
                >
                  {algorithm.codeImplementation}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 分析タブ */}
        <TabsContent value="analysis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 利点 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  <span>利点</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {algorithm.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 欠点 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  <span>欠点</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {algorithm.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 使用例タブ */}
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                <span>実用的な使用例</span>
              </CardTitle>
              <CardDescription>
                このアルゴリズムが実際に使用される場面や適用例
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {algorithm.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AlgorithmDetail


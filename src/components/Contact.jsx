import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Mail, MessageCircle, HelpCircle, Bug, Lightbulb } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // フォーム送信処理（実際の実装では、バックエンドAPIに送信）
    alert('お問い合わせありがとうございます。内容を確認の上、ご連絡いたします。');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactTypes = [
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: '一般的なお問い合わせ',
      description: 'サイトの利用方法やアルゴリズムに関する質問など'
    },
    {
      icon: <Bug className="h-6 w-6" />,
      title: 'バグ報告',
      description: 'サイトの不具合や表示エラーの報告'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: '改善提案',
      description: '新機能の提案やコンテンツの改善案'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'その他',
      description: '上記以外のご意見やご要望'
    }
  ];

  return (
    <ScrollArea className="h-full w-full p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* お問い合わせフォーム */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">お名前 *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="山田太郎"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">メールアドレス *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">件名 *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="お問い合わせの件名"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">メッセージ *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* お問い合わせの種類 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>お問い合わせの種類</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactTypes.map((type, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                      <div className="text-blue-600 mt-1">
                        {type.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm">{type.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>よくある質問</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm mb-2">Q: このサイトのコードは自由に使用できますか？</h3>
                    <p className="text-sm text-gray-600">A: はい、教育目的であれば自由にご利用いただけます。商用利用の場合は事前にお問い合わせください。</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm mb-2">Q: 新しいアルゴリズムの追加リクエストはできますか？</h3>
                    <p className="text-sm text-gray-600">A: はい、お問い合わせフォームから具体的なアルゴリズム名とその理由をお送りください。検討いたします。</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm mb-2">Q: コードに間違いを見つけました。</h3>
                    <p className="text-sm text-gray-600">A: バグ報告として詳細をお送りください。迅速に修正いたします。</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>お問い合わせに関する注意事項</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• お問い合わせへの回答は、通常2-3営業日以内に行います。</p>
                  <p>• 内容によっては回答にお時間をいただく場合があります。</p>
                  <p>• 技術的な質問の場合は、具体的な状況やエラーメッセージを含めてお送りください。</p>
                  <p>• 個人情報は、お問い合わせへの対応のためにのみ使用いたします。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default Contact;


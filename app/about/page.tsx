import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  const companyInfo = {
    name: '株式会社 富士屋',
    established: '1924年（大正13年）',
    capital: '1円',
    employees: '3名',
    address: '〒100-0005 東京都千代田区丸の内１丁目',
    business: '菓子製造販売',
    ceo: '豆田 章子',
  };

  const history = [
    { year: '1924年', event: '創業者の富士田太郎が「富士屋菓子舗」として創業。「おとうさんのきもち」をモットーに掲げる。' },
    { year: '1925年', event: '創業者の富士田太郎が急逝。最期まで「おとうさんのきもちを守れ」という言葉を残した。その遺志を継ぎ、長女の豆田章子が二代目として就任。' },
    { year: '1950年', event: '「ぽっぽ焼き」の大量生産体制を確立。' },
    { year: '1960年', event: 'クッキーとグミの製造を開始。' },
    { year: '1980年', event: 'ヴェルタースオリジナルの日本総代理店となる。' },
    { year: '1992年', event: '「おとうさんの逆襲」事件発生。' },
    { year: '1993年', event: '「やわらか食感シリーズ」の開発・販売開始。' },
    { year: '1998年', event: '「ぽっぽ焼き100時間テレビ」放送。全国的知名度を獲得。' },
    { year: '1999年', event: '「おとうさんの本音せんべい」発売開始。' },
    { year: '2005年', event: '社内基幹システム導入。デジタル化への第一歩を踏み出す。' },
    { year: '2006年', event: '「おとうさんと一緒に学ぼうPC教室」を社内で開催。' },
    { year: '2020年', event: 'コロナ禍により、ECサイト開発プロジェクト始動。' },
    { year: '2024年', event: '創業100周年。「頑固おやじでも購入できるECサイト」をオープン予定。' }
];

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">会社概要</h1>
        <Button asChild variant="outline">
          <Link href="/">トップに戻る</Link>
        </Button>
      </div>

      {/* 会社情報 */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">基本情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(companyInfo).map(([key, value]) => (
              <div key={key} className="border-b pb-2">
                <dt className="text-gray-600 text-sm mb-1">
                  {key === 'name' && '会社名'}
                  {key === 'established' && '設立'}
                  {key === 'capital' && '資本金'}
                  {key === 'employees' && '従業員数'}
                  {key === 'address' && '所在地'}
                  {key === 'business' && '事業内容'}
                  {key === 'ceo' && '代表取締役'}
                </dt>
                <dd className="font-medium">{value}</dd>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 沿革 */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">会社沿革</h2>
          <div className="space-y-4">
            {history.map((item, index) => (
              <div key={index} className="flex border-b pb-4">
                <div className="w-24 font-medium">{item.year}</div>
                <div>{item.event}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* アクセスマップ */}
      <Card className="mt-12">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-6">アクセス</h2>
          <div className="relative h-[400px] mb-4">
            {/* Google Mapsを埋め込む場合は以下のようなiframeを使用 */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398542!2d139.76454987677598!3d35.68124053757839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1709004012345!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-gray-600">
            最寄り駅：〇〇線△△駅から徒歩5分
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 
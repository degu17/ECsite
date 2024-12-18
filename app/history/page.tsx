import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HistoryPage() {
  const timelineEvents = [
    {
      year: '1924年',
      title: '創業',
      description: '創業者の富士田太郎が、看板商品「ぽっぽ焼き」は、当時、新潟県の北部に位置する城下町「新発田市」で、町民の焼きねり菓子として考案されたものを独自に再解釈。政府の役人でもあった富士田太郎は、機密文章を運ぶ手段としてぽっぽ焼きの中に手紙を入れることを思いつく。当時「ポスト」の隠語であった「ぽっぽ」が名前に入っていることで、幕府の役人に密かに文書のことが伝わると考えた。また、モフラージュのため、新潟と同様に9本入りをスタンダードとし、袋に入れ渡していた。しかし、幕府の役人たちは味に感動し、文書に気づかなかったと言われている。この時の菓子作りの技術を活かし、東京・下町で「富士屋菓子舗」として創業。「おとうさんのきもち」をモットーに、手頃な価格で質の良いお菓子を提供することを心がけた。'
    },
    {
      year: '1925年',
      title: '創業期の試練と革新',
      description: '創業からわずか1年後、富士田太郎は42歳の若さで急逝。最期の言葉として「おとうさん（俺）のきもちを守れ」を残し、地域の人々に惜しまれながら旅立った。その後を継いだのは23歳の長女・豆田章子。当時、女性経営者は極めて珍しく、周囲の反対も多かったが、「おとうさんのきもち」を「家族を想う全てのおとうさんの気持ち」と再解釈し、果敢に経営を引き継いだ。豆田は商品開発にも女性ならではの視点を取り入れていった。'
    },
    {
        year: '1950年',
        title: 'ぽっぽ焼き量産化',
        description: '戦後の復興期に独自の製法による「ぽっぽ焼き」の大量生産体制を確立。より多くの家庭に「おとうさんのきもち」をお届けすることが可能に。'
      },
      {
        year: '1960年',
        title: '商品多角化',
        description: '若い世代向けにクッキーとグミの製造を開始。伝統の味を守りながら、新しい商品展開で事業を拡大。'
      },
      {
        year: '1980年',
        title: '国際展開',
        description: 'ヴェルタースオリジナルの日本総代理店として輸入菓子市場に参入。海外の味と日本の「おとうさんのきもち」の融合を実現。'
      },
      {
        year: '1992年',
        title: '「おとうさんの逆襲」事件',
        description: '新商品「超硬化ぽっぽ焼き」による入れ歯破損事件が発生。この危機を逆手に取り「やわらか食感シリーズ」を開発、高齢者層からの支持を獲得し、売上過去最高を記録。'
      },
      {
        year: '1998年',
        title: 'ぽっぽ焼き100時間テレビ',
        description: '二代目社長が突如、深夜のテレビショッピング番組で「100時間ぶっ通し！ぽっぽ焼き手作り実演販売」を開始。「おとうさんのきもち」を体現するため、齢７７歳の豆田社長は三日間眠らずに手作り続けた結果、生放送で「ぽっぽ焼き」と「どら焼き」を混同し始める珍事が発生。しかし、この放送は予想外の人気を博し、「疲れたおかあさんの本音トーク」として視聴率20%を記録。結果的に、会社の知名度は全国区となり、通販業務への第一歩となった。'
      },
      {
        year: '1999年',
        title: '新商品開発',
        description: '大反響だった100時間テレビを記念し、「おかあさんの本音せんべい」を発売。視聴者からのリクエストを元に開発された新商品として人気を博す。'
      },
      {
        year: '2005年',
        title: 'デジタル化元年',
        description: '社内基幹システムを導入し、伝統的な経営からデジタル時代への転換を開始。「パソコンの前でぽっぽ焼きを食べながら学ぶ」という独自の研修方式で、全社的なIT化を推進。'
      },
      {
        year: '2006年',
        title: 'IT教育の推進',
        description: '「おとうさんも一緒に学ぼうPC（ぽっぽ焼きクッキング）教室」を開催。社員の家族も巻き込んだ教育を実施し、デジタル化への理解を深める取り組みを実施。'
      },
      {
        year: '2020年',
        title: 'EC事業への挑戦',
        description: 'コロナ禍を契機に、「頑固おやじでも購入できるECサイト」の開発プロジェクトを始動。「3クリックでお買い物完了」をコンセプトに、使いやすさを追求したECサイトの構築を開始。'
      }
  ];

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">100年の歴史</h1>
        <Button asChild variant="outline">
          <Link href="/">トップに戻る</Link>
        </Button>
      </div>

      {/* イントロダクション */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">
            1924年の創業以来、おとうさんのきもちは、代々受け継がれる伝統の味と、
            時代とともに進化する技術を融合させながら、お客様に喜ばれる商品づくりを
            続けてまいりました。100年の歴史は、お客様との深い絆の歴史でもあります。
          </p>
        </CardContent>
      </Card>

      {/* タイムライン */}
      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="text-primary font-bold text-xl mb-2">
                {event.year}
              </div>
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* まとめ */}
      <Card className="mt-12">
        <CardContent className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">これからの100年へ</h2>
          <p className="text-lg leading-relaxed">
            伝統を守りながらも、新しい価値を創造し続けること。
            それが私たちの使命です。
            これからも、お客様に愛される商品づくりを続けてまいります。
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 
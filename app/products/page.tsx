import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// 商品一覧ページ
export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: 'ぽっぽ焼き 詰め合わせ',
      price: 2500,
      category: 'poppo',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJsRIlBeREwdYTXG4OD4ffPkb5v-SH3Dj7sM6Ue82UixyxMw7Ve_rLqvpjhcwgTI_dAg9PrCGsgt6KetdZ3XHlylcXe-jjTIQa11wANkQT9sa_ZWzpP59S-oI2S7gWbuXJT3IaJw3NslM/s800/sweets_poppoyaki.png',
      description: '伝統の味わいをお楽しみください。',
    },
    {
      id: 2,
      name: 'ヴェルタースオリジナル',
      price: 800,
      category: 'candy',
      image: 'https://www.morinaga.co.jp/products/products_images/l/PRD2009-08-0388_100018_00_1472808963_57c7f68376e67.png',
      description: '懐かしい味わいのキャラメル。',
    },
    {
        id: 3,
        name: 'アーモンドクッキー',
        price: 1200,
        category: 'cookie',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1000',
        description: 'お子様にもおすすめです。',
    }
  ];

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">商品一覧</h1>
        <Button asChild variant="outline">
          <Link href="/">トップに戻る</Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[90%] mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-3">
              <div className="relative aspect-square mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-base font-bold text-primary">
                  ¥{product.price.toLocaleString()}
                </p>
                <Button size="sm" asChild>
                  <Link href={`/products/${product.id}`}>詳細を見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 
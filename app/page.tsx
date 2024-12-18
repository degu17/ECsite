import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Cookie, Candy, Coffee } from 'lucide-react';

// トップページ
export default function Home() {
  const categories = [
    {
      name: 'ぽっぽ焼き',
      icon: Coffee,
      href: '/products/category/poppo',
      description: '創業100年の伝統の味',
    },
    {
      name: 'ヴェルタース',
      icon: Candy,
      href: '/products/category/candy',
      description: '懐かしい味わい',
    },
    {
      name: 'クッキー',
      icon: Cookie,
      href: '/products/category/cookie',
      description: 'サクサク食感',
    },
    {
      name: 'グミ',
      icon: Gift,
      href: '/products/category/gummy',
      description: 'ジューシーな味わい',
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'ぽっぽ焼き 詰め合わせ',
      price: 2500,
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJsRIlBeREwdYTXG4OD4ffPkb5v-SH3Dj7sM6Ue82UixyxMw7Ve_rLqvpjhcwgTI_dAg9PrCGsgt6KetdZ3XHlylcXe-jjTIQa11wANkQT9sa_ZWzpP59S-oI2S7gWbuXJT3IaJw3NslM/s800/sweets_poppoyaki.png',
    },
    {
      id: 2,
      name: 'ヴェルタースオリジナル~おじいさんからもらった初めてのキャンディー',
      price: 800,
      image: 'https://www.morinaga.co.jp/products/products_images/l/PRD2009-08-0388_100018_00_1472808963_57c7f68376e67.png',
    },
    {
      id: 3,
      name: 'アーモンドクッキー',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <div>
      {/* メインビジュアル */}
      <section className="relative h-[360px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80"
          alt="おとうさんのきもち メインビジュアル"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">おとうさんのきもち</h1>
          <p className="text-xl md:text-2xl mb-8">創業100年の伝統の味をお届けします</p>
          <Button asChild size="lg">
            <Link href="/products">商品を見る</Link>
          </Button>
        </div>
      </section>

      {/* カテゴリー一覧 */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">商品カテゴリー</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href={category.href}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* おすすめ商品 */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">おすすめ商品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-primary">
                    ¥{product.price.toLocaleString()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Button asChild variant="ghost">
        <Link href="/about">会社概要</Link>
      </Button>
    </div>
  );
}
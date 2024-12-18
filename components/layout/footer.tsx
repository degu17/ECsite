import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">会社概要</Link></li>
              <li><Link href="/history" className="text-muted-foreground hover:text-foreground">100年の歴史</Link></li>
              <li><Link href="/store" className="text-muted-foreground hover:text-foreground">店舗情報</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お買い物ガイド</h3>
            <ul className="space-y-2">
              <li><Link href="/guide" className="text-muted-foreground hover:text-foreground">ご利用ガイド</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">配送について</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">お問い合わせフォーム</Link></li>
              <li><Link href="/tel:0120-xxx-xxx" className="text-muted-foreground hover:text-foreground">電話でのお問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">規約・方針</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground">利用規約</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground">プライバシーポリシー</Link></li>
              <li><Link href="/law" className="text-muted-foreground hover:text-foreground">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} おとうさんのきもち All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
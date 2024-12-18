"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NavigationMenu } from '@/components/ui/navigation-menu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニュー</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4">
                <Link href="/products/category/poppo" className="text-lg font-medium">
                  ぽっぽ焼き
                </Link>
                <Link href="/products/category/candy" className="text-lg font-medium">
                  ヴェルタースオリジナル
                </Link>
                <Link href="/products/category/cookie" className="text-lg font-medium">
                  クッキー
                </Link>
                <Link href="/products/category/gummy" className="text-lg font-medium">
                  グミ
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">株式会社　富士屋</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products/category/poppo" className="text-sm font-medium">
              ぽっぽ焼き
            </Link>
            <Link href="/products/category/candy" className="text-sm font-medium">
              ヴェルタース
            </Link>
            <Link href="/products/category/cookie" className="text-sm font-medium">
              クッキー
            </Link>
            <Link href="/products/category/gummy" className="text-sm font-medium">
              グミ
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">カート</span>
            </Button>
          </Link>
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
              <span className="sr-only">アカウント</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
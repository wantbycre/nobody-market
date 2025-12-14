"use client";

import Link from "next/link";
import { ShoppingCart, User, LogIn, LogOut } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// 임시 장바구니 수량 및 로그인 상태 (Jotai 설정 전 임시 Mock)
const cartCount = 3;
const isLoggedIn = false; // Jotai로 대체될 예정입니다.

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo / Home Link */}
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-primary"
                >
                    E-Shop Portfolio
                </Link>

                {/* Navigation Links (GNB) */}
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/products"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    상품 목록
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* 관리자 링크 (Mockup) */}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/admin"
                                    className={navigationMenuTriggerStyle()}
                                >
                                    관리자 페이지
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                    {/* 장바구니 버튼 */}
                    <Button asChild variant="ghost" className="relative">
                        <Link href="/cart">
                            <ShoppingCart className="h-5 w-5" />
                            {/* 장바구니 수량 뱃지 */}
                            {cartCount > 0 && (
                                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </Button>

                    {/* 로그인/로그아웃 버튼 (Mockup) */}
                    {isLoggedIn ? (
                        <Button variant="ghost" size="icon">
                            <LogOut className="h-5 w-5" />
                        </Button>
                    ) : (
                        <Button variant="ghost" size="icon">
                            <LogIn className="h-5 w-5" />
                        </Button>
                    )}

                    {/* 사용자 프로필 (옵션) */}
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </header>
    );
}

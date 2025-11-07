"use client";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import { Product } from "@/data/mock-products";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

// price를 포맷팅하는 유틸리티 함수 (나중에 lib/utils.ts로 이동 가능)
const formatPrice = (price: number) => price.toLocaleString("ko-KR") + "원";

export default function ProductCard({ product }: ProductCardProps) {
    // TODO: 1. 좋아요 (Like) 상태 관리 (Mockup 또는 Jotai 활용)
    // TODO: 2. 장바구니 추가 로직 (Jotai 활용)

    return (
        <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
            {/* 이미지 섹션 */}
            <Link
                href={`/products/${product.id}`}
                className="block relative h-48 w-full bg-gray-100"
            >
                <Image
                    src={product.image || "https://via.placeholder.com/300x300"}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="transition-opacity duration-300 hover:opacity-90"
                />
            </Link>

            <CardHeader className="p-4 pb-2 flex-grow">
                <div className="flex justify-between items-start">
                    <CardTitle className="text-lg line-clamp-2">
                        <Link
                            href={`/products/${product.id}`}
                            className="hover:underline"
                        >
                            {product.title}
                        </Link>
                    </CardTitle>
                    {/* 좋아요 버튼 (Mockup) */}
                    <Toggle
                        aria-label="좋아요"
                        variant="outline"
                        // pressed={product.isLiked} // 실제 상태 연결 시
                        className="data-[state=on]:bg-red-500 data-[state=on]:text-white data-[state=on]:border-red-500 ml-2"
                    >
                        <Heart className="h-4 w-4 fill-current" />
                    </Toggle>
                </div>
                <CardDescription className="text-sm line-clamp-2 mt-1">
                    {product.description}
                </CardDescription>
            </CardHeader>

            <CardFooter className="p-4 pt-2 flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                    {formatPrice(product.price)}
                </span>
                {/* 장바구니 버튼 */}
                <Button
                    // onClick={() => handleAddToCart(product)} // 실제 로직 연결 시
                    size="sm"
                    className="gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    장바구니
                </Button>
            </CardFooter>
        </Card>
    );
}

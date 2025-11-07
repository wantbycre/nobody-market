import { MOCK_PRODUCTS } from "@/data/mock-products";
import ProductCard from "@/components/products/ProductCard";
import { Separator } from "@/components/ui/separator";

export const metadata = {
    title: "상품 목록 | E-Shop Portfolio",
};

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold tracking-tight">
                전체 상품 목록
            </h1>
            <p className="text-muted-foreground mt-1 mb-6">
                포트폴리오를 위한 Mockup 상품 {MOCK_PRODUCTS.length}개가
                준비되어 있습니다.
            </p>

            <Separator className="mb-8" />

            {/* 상품 목록 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {MOCK_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

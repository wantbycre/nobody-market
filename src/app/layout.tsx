import type { JSX } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. JotaiProvider import
import { JotaiProvider } from "@/components/providers/JotaiProvider";

// 2. Header, Footer import
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// 3. Shadcn에서 필요한 유틸리티 함수 import
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "E-Shop Portfolio | Next.js, TS, Shadcn/ui",
    description: "온라인 쇼핑몰 MVP",
};

const ClientLayout = ({ children }: { children: JSX.Element }) => {
    return (
        // Shadcn 템플릿의 Light 모드 클래스 (tailwind.config.js 설정에 따라 다름)
        <html lang="ko" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background antialiased",
                    inter.className
                )}
            >
                {/* 4. JotaiProvider로 전체를 감싸서 상태 관리 준비 */}
                <JotaiProvider>
                    {/* Header를 배치 */}
                    <Header />

                    <main className="flex-grow">
                        {children} {/* Page Content */}
                    </main>

                    {/* Footer를 배치 */}
                    <Footer />
                </JotaiProvider>
            </body>
        </html>
    );
};

export default ClientLayout;

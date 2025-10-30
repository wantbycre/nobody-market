// src/components/layout/Footer.tsx

export default function Footer() {
    return (
        <footer className="mt-12 border-t bg-muted/40 py-6">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>
                    &copy; {new Date().getFullYear()} E-Shop Portfolio. Made
                    with Next.js, TypeScript, and Shadcn/ui.
                </p>
                <p className="mt-1">
                    포트폴리오 용 Mockup 서비스입니다. (실제 결제 기능 없음)
                </p>
            </div>
        </footer>
    );
}

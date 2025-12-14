// middleware.ts

import { NextResponse, NextRequest } from "next/server";

// 💡 JWT를 저장할 때 사용한 쿠키 이름
const AUTH_TOKEN_NAME = "auth_token";

// 보호가 필요한 경로들 (로그인 사용자만 접근 가능)
// const PROTECTED_PATHS = ["/todo", "/admin", "/api/todo", "/api/admin"];

// 로그인 페이지 경로
const LOGIN_PATH = "/auth/login";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 💡 1. 미들웨어가 실행되었다는 것은 matcher에 의해 보호가 필요하다는 의미입니다.
    const token = request.cookies.get(AUTH_TOKEN_NAME)?.value;

    // 💡 2. 토큰이 없으면 로그인 페이지로 리다이렉트 (모든 보호 경로에 적용)
    if (!token) {
        // 현재 경로를 'from' 파라미터로 넘겨 로그인 후 돌아올 수 있도록 설정
        // const loginUrl = new URL(LOGIN_PATH, request.url);
        // loginUrl.searchParams.set("from", pathname);
        // return NextResponse.redirect(loginUrl);
    }

    // 💡 3. 토큰이 있으면 통과
    return NextResponse.next();

    // 참고: 로그인/회원가입 페이지에서 이미 토큰이 있는 경우 리다이렉트는
    // matcher에 의해 이미 제외되었거나, 기존 로직으로 처리되어야 합니다.
}

// export function middleware(request: NextRequest) {
//     const { pathname } = request.nextUrl;

//     // 1. 보호 경로인지 확인
//     const isProtectedRoute = PROTECTED_PATHS.some((path) =>
//         pathname.startsWith(path)
//     );

//     if (isProtectedRoute) {
//         // 2. 쿠키에서 토큰 확인
//         const token = request.cookies.get(AUTH_TOKEN_NAME)?.value;

//         // 3. 토큰이 없으면 로그인 페이지로 리다이렉트
//         if (!token) {
//             // 현재 경로를 'from' 파라미터로 넘겨 로그인 후 돌아올 수 있도록 설정
//             const loginUrl = new URL(LOGIN_PATH, request.url);
//             loginUrl.searchParams.set("from", pathname);
//             return NextResponse.redirect(loginUrl);
//         }

//         // 4. 토큰이 있으면 요청 통과 (유효성 검사는 서버에서 진행)
//         return NextResponse.next();
//     }

//     // 로그인 페이지에 접근하려는데 이미 토큰이 있는 경우 (선택 사항: 메인으로 리다이렉트)
//     if (
//         pathname.startsWith(LOGIN_PATH) &&
//         request.cookies.has(AUTH_TOKEN_NAME)
//     ) {
//         return NextResponse.redirect(new URL("/", request.url));
//     }

//     // 그 외 경로는 통과
//     return NextResponse.next();
// }

// 💡 미들웨어를 실행할 경로 지정
export const config = {
    matcher: [
        /*
         * 다음을 제외한 모든 요청 경로에 미들웨어를 적용합니다:
         * - _next/static (정적 파일)
         * - _next/image (이미지 최적화 파일)
         * - favicon.ico
         * - / (루트 경로, 로그인 여부와 상관없이 접근 가능해야 함)
         * - /auth/signup (회원가입 페이지, 로그인 없이 접근 가능해야 함)
         */
        // "/((?!_next/static|_next/image|favicon.ico|auth/signup).*)",
        // "/((?!api|_next/static|_next/image|favicon.ico|auth/login|auth/signup).*)",
    ],
};

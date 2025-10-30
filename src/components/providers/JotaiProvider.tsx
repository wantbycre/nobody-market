"use client"; // 클라이언트 컴포넌트로 선언

import { Provider } from "jotai";
import React from "react";

export function JotaiProvider({ children }: { children: React.ReactNode }) {
    // <Provider>로 하위 컴포넌트들을 감싸줍니다.
    return <Provider>{children}</Provider>;
}

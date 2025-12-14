// src/auth/login/schema.ts

import * as yup from "yup";

// 💡 폼 데이터 타입 정의
export interface LoginFormData {
    identifier: string; // ID 또는 이메일
    password: string;
}

// 💡 유효성 검사 스키마 정의
export const loginSchema = yup.object().shape({
    identifier: yup.string().required("아이디 또는 이메일은 필수 항목입니다."),

    password: yup
        .string()
        .required("비밀번호는 필수 항목입니다.")
        .min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
});

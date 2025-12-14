// src/auth/signup/schema.ts

import * as yup from "yup";

// 💡 폼 데이터의 타입 정의
export interface SignUpFormData {
    name: string;
    phoneNumber: string;
    age: number;
    gender: "MALE" | "FEMALE" | ""; // 빈 문자열 포함
    address: string;
}

// 💡 유효성 검사 스키마 정의
export const signupSchema = yup.object().shape({
    name: yup
        .string()
        .required("이름은 필수 항목입니다.")
        .min(2, "이름은 최소 2자 이상이어야 합니다."),

    phoneNumber: yup
        .string()
        .required("전화번호는 필수 항목입니다.")
        .matches(
            /^(01[016789])-?([0-9]{3,4})-?([0-9]{4})$/,
            "유효하지 않은 전화번호 형식입니다."
        ),

    age: yup
        .number()
        .required("나이는 필수 항목입니다.")
        .typeError("나이는 숫자여야 합니다.")
        .min(1, "나이는 1세 이상이어야 합니다.")
        .max(120, "나이는 120세 이하여야 합니다."),

    gender: yup
        .string()
        .oneOf(["MALE", "FEMALE", ""], "유효하지 않은 성별 값입니다.")
        .required("성별은 필수 선택 항목입니다."),

    address: yup
        .string()
        .required("주소는 필수 항목입니다.")
        .min(5, "주소는 최소 5자 이상이어야 합니다."),
});

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpFormData, signupSchema } from "./schema";
import { useRouter } from "next/navigation"; // 💡 리다이렉트용
import { useMutation } from "@tanstack/react-query"; // 💡 useMutation import
import { signupUser } from "@/app/api/authApi"; // 💡 API 함수 import
import Link from "next/link";

const Signup = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignUpFormData>({
        resolver: yupResolver(signupSchema), // 💡 yup 스키마 연결
        defaultValues: {
            name: "",
            phoneNumber: "",
            age: 0,
            gender: "",
            address: "",
        },
    });

    // 💡 1. useMutation 설정
    const signupMutation = useMutation({
        mutationFn: signupUser,
        onSuccess: () => {
            alert(
                "회원가입이 성공적으로 완료되었습니다. 로그인 페이지로 이동합니다."
            );
            reset();
            router.push("/auth/login"); // 💡 성공 시 로그인 페이지로 리다이렉트
        },
        onError: (error: Error) => {
            console.error("회원가입 실패:", error);
            alert(`회원가입 실패: ${error.message}`);
        },
    });

    // 💡 2. 폼 제출 핸들러 수정
    const onSubmit = (data: SignUpFormData) => {
        // 폼 유효성 검사 통과 후, Mutation 실행
        signupMutation.mutate(data);
    };

    // 폼 제출
    // const onSubmit = async (data: SignUpFormData) => {
    //     try {
    //         console.log(`회원 데이터` + JSON.stringify(data));

    //         // api 추가
    //         // 예) await fetch('https://111.111.11/api/signup)
    //         //     .then(res => res.json())
    //         //     .then(res => {
    //         //         "회원가입 성공"
    //         // 			})

    //         reset();
    //     } catch (error) {
    //         console.log("가입 실패");
    //         alert(
    //             `가입 실패 ${
    //                 error instanceof Error ? error.message : "알수 없는 오류"
    //             }`
    //         );
    //     }
    // };

    return (
        <div className="flex justify-center items-center py-10 bg-gray-50 min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md space-y-4"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    회원가입
                </h2>

                {/* --- 1. 이름 --- */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        이름
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")} // 💡 register를 통해 폼 상태 연결
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* --- 2. 전화번호 --- */}
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                    >
                        전화번호
                    </label>
                    <input
                        id="phoneNumber"
                        type="tel"
                        {...register("phoneNumber")}
                        placeholder="010-1234-5678"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* --- 3. 나이 --- */}
                <div>
                    <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                    >
                        나이
                    </label>
                    <input
                        id="age"
                        type="number"
                        {...register("age", { valueAsNumber: true })} // 💡 숫자 타입으로 변환 지정
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.age && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.age.message}
                        </p>
                    )}
                </div>

                {/* --- 4. 성별 --- */}
                <div>
                    <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                    >
                        성별
                    </label>
                    <select
                        id="gender"
                        {...register("gender")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">선택</option>
                        <option value="MALE">남성</option>
                        <option value="FEMALE">여성</option>
                    </select>
                    {errors.gender && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.gender.message}
                        </p>
                    )}
                </div>

                {/* --- 5. 주소 --- */}
                <div>
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                    >
                        주소
                    </label>
                    <input
                        id="address"
                        type="text"
                        {...register("address")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.address && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.address.message}
                        </p>
                    )}
                </div>

                {/* --- 제출 버튼 --- */}
                <button
                    type="submit"
                    disabled={isSubmitting} // 제출 중일 때 비활성화
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                >
                    {isSubmitting ? "처리 중..." : "회원가입 완료"}
                </button>

                <div className="text-center mt-4">
                    <Link
                        href="/auth/login"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        이미 계정이 있으신가요? 로그인
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Signup;

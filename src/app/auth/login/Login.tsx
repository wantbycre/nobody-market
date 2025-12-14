"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, LoginFormData } from "./schema";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/app/api/authApi";
// import { setAuthCookie } from "@/src/actions/auth"; // 💡 Server Action import

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    // 💡 1. useMutation 설정
    // const loginMutation = useMutation({
    //     mutationFn: loginUser,
    //     onSuccess: (data) => {
    //         // 💡 2. 로그인 성공 시, JWT를 Server Action에 전달하여 쿠키 설정 요청
    //         // setAuthCookie(data.token);
    //         // 참고: setAuthCookie 내에서 redirect가 발생합니다.
    //     },
    //     onError: (error: Error) => {
    //         console.error("로그인 실패:", error);
    //         alert(`로그인 실패: ${error.message}`);
    //     },
    // });

    // 💡 3. 폼 제출 핸들러
    const onSubmit = (data: LoginFormData) => {
        // loginMutation.mutate(data);
    };

    const isSubmittingOrMutating = isSubmitting; //|| loginMutation.isPending;

    return (
        <div className="flex justify-center items-center py-10 bg-gray-50 min-h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md space-y-4"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    로그인
                </h2>

                {/* --- 1. 아이디/이메일 --- */}
                <div>
                    <label
                        htmlFor="identifier"
                        className="block text-sm font-medium text-gray-700"
                    >
                        아이디 (또는 이메일)
                    </label>
                    <input
                        id="identifier"
                        type="text"
                        {...register("identifier")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.identifier && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.identifier.message}
                        </p>
                    )}
                </div>

                {/* --- 2. 비밀번호 --- */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        비밀번호
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.password && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* --- 제출 버튼 --- */}
                <button
                    type="submit"
                    disabled={isSubmittingOrMutating}
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                    {isSubmittingOrMutating ? "로그인 중..." : "로그인"}
                </button>

                <div className="text-center mt-4">
                    <Link
                        href="/auth/signup"
                        className="text-sm text-green-600 hover:underline"
                    >
                        계정이 없으신가요? 회원가입
                    </Link>
                </div>
            </form>
        </div>
    );
}

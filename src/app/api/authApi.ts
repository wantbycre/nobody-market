import { SignUpFormData } from "@/app/auth/signup/schema";
import { API_AUTH_KEY } from "@/config/constants";

if (!API_AUTH_KEY) {
    throw new Error("API_AUTH_KEY 환경 변수가 설정되지 않았습니다.");
}

// 회원가입 API 호출 함수
export const signupUser = async (formData: SignUpFormData): Promise<void> => {
    // 🚨 TODO: 실제 백엔드 API 주소로 변경해야 합니다. (예: /api/v1/user/signup)
    const response = await fetch(`${API_AUTH_KEY}/api/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        // 서버에서 에러 메시지를 JSON 형태로 보낼 경우 처리
        const errorData = await response
            .json()
            .catch(() => ({ message: "서버 오류" }));
        throw new Error(errorData.message || "회원가입에 실패했습니다.");
    }

    // 200/201 상태 코드가 성공적으로 반환되었으므로 별도의 데이터는 반환하지 않습니다.
};

interface LoginResponse {
    token: string;
}

export const loginUser = async (
    formData: LoginResponse
): Promise<LoginResponse> => {
    // 🚨 TODO: 실제 백엔드 로그인 API 주소로 변경
    const response = await fetch(`${API_AUTH_KEY}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorData = await response
            .json()
            .catch(() => ({ message: "인증 실패" }));
        throw new Error(
            errorData.message ||
                "로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요."
        );
    }

    // JWT 토큰이 포함된 응답 데이터 반환
    const data: LoginResponse = await response.json();
    return data;
};

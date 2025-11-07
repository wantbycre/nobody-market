// 상품
export interface Product {
    id: string;
    image: string; // 이미지 경로는 임시 URL 또는 Mockup으로
    title: string;
    description: string;
    price: number;
    stock: number;
    isLiked: boolean; // 사용자가 좋아요를 눌렀는지 여부 (Mock)
}

// 5개의 상품 Mock 데이터
export const MOCK_PRODUCTS: Product[] = [
    {
        id: "prod-101",
        image: "/product1.png",
        title: "미니멀리스트 캔버스 백",
        description: "데일리 룩에 완벽한 사이즈와 클래식한 디자인.",
        price: 45000,
        stock: 10,
        isLiked: false,
    },
    {
        id: "prod-102",
        image: "/product2.png",
        title: "프리미엄 무선 헤드폰",
        description: "압도적인 음질과 편안한 착용감으로 즐기는 음악.",
        price: 199000,
        stock: 5,
        isLiked: true,
    },
    {
        id: "prod-103",
        image: "/product3.png",
        title: "친환경 대나무 칫솔 세트",
        description: "환경을 생각하는 당신을 위한 필수품.",
        price: 15000,
        stock: 50,
        isLiked: false,
    },
    {
        id: "prod-104",
        image: "/product4.png",
        title: "스마트 워치 S-Pro",
        description: "건강 관리와 알림을 한 손목에, 세련된 디자인.",
        price: 250000,
        stock: 3,
        isLiked: false,
    },
    {
        id: "prod-105",
        image: "/product5.png",
        title: "빈티지 가죽 노트북 파우치",
        description: "시간이 지날수록 멋을 더하는 고급 가죽 파우치.",
        price: 88000,
        stock: 12,
        isLiked: true,
    },
];

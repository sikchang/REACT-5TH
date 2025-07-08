// 전역 타입으로 어디서든 사용해도 상관이 없어짐 즉, import를 안해도 됨.


type StatusMessage = '🤍대기' | '🔰로딩 중...' | '⭕로딩 성공!' | '❌로딩 실패';

type ImageType = 'react' | 'vite' | 'next.js' | 'kakao talk';

type ReactLibrary = {
    name: string;
    author: string;
    writtenIn: string;
    type: string;
    license: string;
};


type StatusMessageWithId = {
    id: string;
    message: string;
}
import type React from "react";

interface Props {
    onClick: (e:React.MouseEvent<HTMLDivElement>) => void;
    style: React.CSSProperties & { [key: string]: string | number };
    children?: React.ReactNode
    title?: string;
}
// 재귀함수
function LayoutBox({onClick,children, ...restProps}:Props) {
    return (
        <div className="box" onClick={onClick} {...restProps}>{children}</div>
    );
}

export default LayoutBox;
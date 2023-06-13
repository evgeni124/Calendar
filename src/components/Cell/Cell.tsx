import { FC, PropsWithChildren } from "react";

interface ICellProps extends PropsWithChildren {
    className?: string,
    onClick?: () => void 
}

const Cell: FC<ICellProps> = ({ className, children, onClick }) => {
    return <div className={className} onClick={onClick}>{ children }</div>
}

export default Cell
// import { PropsWithChildren } from "react";

export interface ModalType {
    children?: React.ReactNode;
    isOpen: boolean;
    action: string;
    coin: string;
    symbol: string;
    img_src: string;
    price: string;
    toggle: () => void;
}

// type ModalChildren = PropsWithChildren<{}>
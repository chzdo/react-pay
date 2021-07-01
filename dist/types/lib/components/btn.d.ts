import { CSSProperties, FC } from "react";
export default function PayButton({ buttonStyle, verifying, VerifyComponent, text, action }: {
    buttonStyle?: CSSProperties | undefined;
    verifying?: boolean | false;
    VerifyComponent?: FC<any>;
    text?: string | undefined;
    action: Function;
}): JSX.Element;

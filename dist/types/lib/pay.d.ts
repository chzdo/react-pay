import { PayStackProps } from "./types";
export default function onPay({ verify, setVerify, onSuccess, type }: {
    verify: PayStackProps['verify'];
    setVerify: Function;
    onSuccess: PayStackProps['onSuccess'];
    type: 'flutter' | 'paystack';
}): (ref: any) => void;

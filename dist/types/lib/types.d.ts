import { CSSProperties, FC } from 'react';
declare type currency = "NGN" | "USD" | "GHA" | "ZAR";
declare type channels = 'bank' | 'card' | 'qr' | 'ussd' | 'mobile_money';
declare type bearer = 'account' | 'subaccount';
declare type subaccount = {
    id: string;
    transaction_split_ratio: number;
};
export declare type Type = "flutter" | "paystack";
export interface PayStackProps extends PaymentProps {
    config: {
        email: string;
        amount: number | null;
    };
    currency?: currency;
    label?: string;
    channels?: channels[];
    onBankTransferConfirmationPending?: Function;
    subaccount?: string;
    transaction_charge?: number;
    bearer?: bearer;
    split_code?: string;
    plan?: string;
    quantity?: number;
    metadata?: object;
}
interface PaymentProps {
    publicKey: string;
    onSuccess: (reference: any) => any;
    onClose: (reference?: any) => any;
    buttonStyle?: CSSProperties;
    text?: string;
    verify?: {
        url: RequestInfo;
        options: RequestInit;
        Component: FC<any>;
    };
    reference?: string;
}
export interface FlutterWaveProps extends PaymentProps {
    tx_ref?: string;
    amount: number | null;
    currency?: currency;
    integrity_hash?: string;
    payment_options?: string;
    payment_plan?: string;
    redirect_url?: string;
    customer: {
        'email': string;
        'phonenumber': string | number;
        'name': string;
    };
    subaccounts?: subaccount[];
    meta?: object;
    customizations?: {
        'title': string;
        'description': string;
        'logo': string;
    };
}
export {};

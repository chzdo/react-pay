/// <reference types="react" />
import { PayStackProps } from '../types';
declare global {
    interface Window {
        globalThis: any;
    }
}
export default function PayStack({ onSuccess, onClose, buttonStyle, text, config, publicKey, currency, verify, reference, ...rest }: PayStackProps): JSX.Element;
